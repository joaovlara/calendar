import React, { useEffect, useState } from 'react';
import { BtnSave, BtnCancel, EditName, Modal, CoffeeWeek, DayCoffee, TextCoffee, CoffeeContainer, CoffeeDiv, CardCoffee, EditableText, MemberName } from "..//../styles/styles.CoffeeDay"
import axios from "axios";
import { toast } from "react-toastify";

function CoffeeDay() {
  const DAYS_OF_THE_WEEK = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  const [coffeeData, setCoffeeData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [editedEmployeeName, setEditedEmployeeName] = useState('');

  const getCafe = async () => {
    try {
      const res = await axios.get("http://192.168.18.32:8800/getCafe");
      const groupedData = groupByDay(res.data);
      setCoffeeData(groupedData);
    } catch (error) {
      console.error("Erro ao obter dados do cafe:", error);
      toast.error("Erro ao obter dados do cafe");
    }
  };

  useEffect(() => {
    getCafe();
  }, []);

  const handleEdit = (employee) => {
    setIsModalOpen(true);
    // setEditingId(employee.id);
    setEditingEmployee(employee.id);
    setEditedEmployeeName(employee.nome); // Preencher o nome no modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditedEmployeeName('');
    resetEditingState(); // Limpar estados de edição
  };

  const handleSave = async (newName) => {
    try {
      await axios.put("http://192.168.18.32:8800/editarNome", {
        id: editingEmployee,
        nomeNovo: newName
      });
  
      toast.success("Nome do funcionário atualizado com sucesso.");
      closeModal(); // Fechar o modal após o sucesso
      getCafe(); // Atualizar os dados após a edição
    } catch (error) {
      console.error("Erro ao editar o nome do funcionário:", error);
      toast.error("Erro ao editar o nome do funcionário.");
    }
  };
  
  const resetEditingState = () => {
    setEditedEmployeeName({});
  };

  const groupByDay = (data) => {
    return data.reduce((acc, coffee) => {
      const { dia_da_semana, ...rest } = coffee;
      if (!acc[dia_da_semana]) {
        acc[dia_da_semana] = [rest];
      } else {
        acc[dia_da_semana].push(rest);
      }
      return acc;
    }, {});
  };

  return (
    <CoffeeContainer>
      <TextCoffee>Dia do Café</TextCoffee>
      <CoffeeWeek>
        {DAYS_OF_THE_WEEK.map((dayWeek, index) => {
          const isToday = new Date().getDay() === index + 1;
          const member = coffeeData[dayWeek] || []; // Verifica se há dados para este dia
          return (
            <CoffeeDiv key={dayWeek} isToday={isToday} >
              <CardCoffee>
                <DayCoffee>{dayWeek}</DayCoffee>
                <MemberName>
                  {member.map((employee, index) => (
                    <EditableText
                      onClick={() => handleEdit(employee)} // Passa o objeto do funcionário para handleEdit
                      key={index}>{employee.nome}</EditableText>
                  ))}
                </MemberName>
              </CardCoffee>
            </CoffeeDiv>
          );
        })}
      </CoffeeWeek>
      {isModalOpen && (
        <Modal>
          <EditName>Editar Nome</EditName>
          <input
            type="text"
            value={editedEmployeeName}
            onChange={(e) => setEditedEmployeeName(e.target.value)} />
          <BtnSave onClick={() => handleSave(editedEmployeeName)} />
          <BtnCancel onClick={closeModal} />
        </Modal>
      )}
    </CoffeeContainer>
  );
}

export default CoffeeDay;

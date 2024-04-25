import React, { useEffect, useState } from 'react';
import { BtnSave, BtnCancel,EditName, Modal, CoffeeWeek, DayCoffee, TextCoffee, CoffeeContainer, CoffeeDiv, CardCoffee, EditableText, MemberName } from "..//../styles/styles.CoffeeDay"
import axios from "axios";
import { toast } from "react-toastify";

function CoffeeDay() {
  const DAYS_OF_THE_WEEK = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedEmployeeName, setEditedEmployeeName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedValues, setEditedValues] = useState({});
  const [coffeeData, setCoffeeData] = useState({});

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
  }, []); // Chamado quando altera o funcionário do café

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

  const handleEdit = (id, values) => {
    setEditingId(id);
    setEditedValues(values);
    setIsModalOpen(true);
    setEditedEmployeeName(values.nome); // Preencher o nome no modal
  };

  const handleSave = async (name) => {
    try {
      console.log('name: ', name)
      await axios.patch(`https://192.168.18.32:8800/${editingId}`, { nome: name });
      toast.success("Usuário editado com sucesso.");
      closeModal();
      getCafe(); // Atualizar os dados após a edição
    } catch (error) {
      console.error("Erro ao editar o usuário:", error);
      toast.error("Erro ao editar o usuário.");
    }
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setEditedEmployeeName('');
    resetEditingState(); // Limpar estados de edição
  };

  const resetEditingState = () => {
    setEditingId(null);
    setEditedValues({});
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
                      onClick={() => handleEdit(employee.id, { nome: employee.nome })}
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
              onChange={(e) => setEditedEmployeeName(e.target.value)}
            />
            <BtnSave onClick={() => handleSave(editedEmployeeName)}></BtnSave>
            <BtnCancel onClick={closeModal}>Cancelar</BtnCancel>
        </Modal>
      )}
    </CoffeeContainer>
  );
}

export default CoffeeDay;

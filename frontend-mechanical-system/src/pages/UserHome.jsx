import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import UserHeader from '../components/UserHeader'
import { SystemContext } from '../context/SystemContext';
import { createService } from '../services/serviceRequest';
import { ButtonStyled } from '../styles/Login.styled';
import { DivInputStyled, FormStyled, InputStyled, SectionInputStyled } from '../styles/RegisterEmployeeWorkshop';

export default function UserHome() {

  const { userInfo } = useContext(SystemContext);
  let history = useHistory();

  const [serviceData, setServiceData] = useState({
    userId: 0,
    description: '',
    vehicleModel: '',
    vehicleBrand: '',
    vehicleYear: 0,
  });

  const handleChange = ({ target: { value, name } }) => {
    setServiceData((prevService) => ({ ...prevService, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createService(serviceData);
      console.log(data);
      history.push('/services');
    } catch (error) {
      alert(error.response.data)
    }
  }

  useEffect(() => {
    setServiceData((prevService) => ({ ...prevService, userId: userInfo.user_id }));
  }, []);

  return (
    <>
      <UserHeader />

      <FormStyled onSubmit={handleSubmit}>
        <div>
          <h2 style={{ color: '#056CF9' }}>Registrar problema com seu automóvel</h2>
        </div>

        <SectionInputStyled>

          <DivInputStyled>
            <h3 style={{ color: 'green' }}>Modelo</h3>
            <InputStyled
              type="text"
              value={serviceData.vehicleModel}
              name="vehicleModel"
              onChange={handleChange}
            />
          </DivInputStyled>

          <DivInputStyled>
            <h3 style={{ color: 'green' }}>Ano</h3>
            <InputStyled
              type="number"
              value={serviceData.vehicleYear}
              name="vehicleYear"
              onChange={handleChange}
            />
          </DivInputStyled>

          <DivInputStyled>
            <h3 style={{ color: 'green' }}>Marca</h3>
            <InputStyled
              type="text"
              value={serviceData.vehicleBrand}
              name="vehicleBrand"
              onChange={handleChange}
            />
          </DivInputStyled>
        </SectionInputStyled>

        <SectionInputStyled>
          <DivInputStyled>
            <h3 style={{ color: 'green' }}>Descrição do problema</h3>
            <InputStyled
              type="text"
              value={serviceData.description}
              name="description"
              onChange={handleChange}
            />
          </DivInputStyled>

          <DivInputStyled>
            <ButtonStyled
              userService
              primaryWorkshop
              type="submit"
            >Registrar
            </ButtonStyled>
          </DivInputStyled>
        </SectionInputStyled>
      </FormStyled>
    </>
  )
}

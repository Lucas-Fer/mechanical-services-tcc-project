import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import UserHeader from '../components/UserHeader';
import WorkshopHeader from '../components/WorkshopHeader';
import { SystemContext } from '../context/SystemContext';
import { deleteService, getServiceById } from '../services/serviceRequest';
import { BtnFinishService, CardItemStatus, DetailServiceHeader, DetailServiceInfo, DetailServiceMain, MainStyled, SectionStyled } from '../styles/Service.styled';

export default function ServiceDetail() {

  const { id } = useParams();
  let history = useHistory();

  const { userInfo } = useContext(SystemContext);

  const [serviceInfo, setServiceInfo] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [btnDisabled, setBtnDisabled] = useState(false);

  const getServiceInfo = async (serviceId) => {
    const { data } = await getServiceById(Number(serviceId));
    const { user } = data;

    if (data.status === 'OPEN') setBtnDisabled(true);
    if (data.status === 'PROGRESS') setBtnDisabled(false);
    setUserDetails(user);
    setServiceInfo(data);

  }

  const btnDeleteService = async () => {
    await deleteService(id);

    history.push('/services');
  }

  useEffect(() => {
    if (!userInfo.user_role) history.push('/');
    getServiceInfo(id);
  }, []);

  return (
    <>
      {userInfo.user_role === 'CLIENT' ? <UserHeader /> : <WorkshopHeader />}
      <MainStyled md>
        <DetailServiceHeader>
          <h2 style={{ color: '#056CF9 ' }}>Detalhes do serviço</h2>
          <BtnFinishService
            type="button"
            value="Finalizar serviço"
            onClick={btnDeleteService}
            disabled={btnDisabled}
          />
        </DetailServiceHeader>

        <DetailServiceMain>

          <DetailServiceInfo>
            <p>Serviço 000{serviceInfo.service_id}</p>
            <CardItemStatus
              open={serviceInfo.status === 'OPEN' ? true : false}
            >{serviceInfo.status}</CardItemStatus>
          </DetailServiceInfo>

          <hr />

          <SectionStyled>
            <div>
              <h3 style={{ color: "green" }}>Problema</h3>
              <span>{serviceInfo.description}</span>
            </div>

            {serviceInfo.mechanical ? (
              <div>
                <h3 style={{ color: "#056CF9" }}>Mecanico responsável</h3>
                <div style={{ textAlign: 'center' }}>{serviceInfo.mechanical.mechanical_name}</div>
              </div>
            ) : (
              <span>Ainda nenhum mecânico atribuído.</span>
            )}
          </SectionStyled>


          <div>
            <hr />
            <h3 style={{ color: "green" }}>Veículo</h3>

            <div>Modelo: <span style={{ color: "#056CF9" }}>{serviceInfo.vehicle_model}</span></div>

            <div>Marca: <span style={{ color: "#056CF9" }}>{serviceInfo.vehicle_brand}</span></div>

            <div>Ano: <span style={{ color: "#056CF9" }}>{serviceInfo.vehicle_year}</span></div>
          </div>

          <hr />
          <div>
            <h3 style={{ color: "green" }}>Informações do cliente</h3>

            <div style={{ marginTop: "5px" }}>Nome: <span
              style={{ color: "#056CF9" }}
            >{userDetails.user_name}
            </span>
            </div>

            <div style={{ marginTop: "5px" }}>Contato: <span style={{ color: "#056CF9" }}>{userDetails.user_phone}</span></div>

            <div style={{ marginTop: "5px" }}>Email: <span style={{ color: "#056CF9" }}>{userDetails.user_email}</span></div>

            <div style={{ marginTop: "5px" }}>Endereço: <span style={{ color: "#056CF9" }}>{userDetails.user_address}</span></div>
          </div>
        </DetailServiceMain>
      </MainStyled>
    </>
  )
}

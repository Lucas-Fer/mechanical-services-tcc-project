import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import UserHeader from '../components/UserHeader';
import WorkshopHeader from '../components/WorkshopHeader';
import { SystemContext } from '../context/SystemContext';
import { deleteService, getServiceById, updateServiceByManager, updateServiceInfo } from '../services/serviceRequest';
import { getAllWorkshopMechanicals } from '../services/workshopRequest';
import { OptionStyled, SelectStyled } from '../styles/Login.styled';
import { BtnChangeStatusService, CardItemStatus, DetailServiceHeader, DetailServiceInfo, DetailServiceMain, MainStyled, SectionStyled } from '../styles/Service.styled';

export default function ServiceDetail() {

  const { id } = useParams();
  let history = useHistory();

  const { userInfo } = useContext(SystemContext);

  const [serviceInfo, setServiceInfo] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [serviceDetails, setServiceDetails] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  const [workshopMechanicals, setWorkshopMechanicals] = useState([{ oi: '' }]);
  const [mechanicalId, setMechanicalSelected] = useState('Mecânicos');


  const getServiceInfo = async (serviceId) => {
    const { data } = await getServiceById(Number(serviceId));
    const { user } = data;

    setUserDetails(user);
    setServiceInfo(data);
  }

  const btnDeleteService = async () => {
    await deleteService(id);

    history.push('/services');
  }

  const handleChange = ({ target: { value, name } }) => {
    setServiceDetails((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const onEditService = () => {
    setServiceDetails(serviceInfo);
    setIsUpdate(true);
  }

  const updateServiceByManagers = async () => {
    try {
      await updateServiceByManager(id.toString(), {
        mechanicalId,
      });
      getServiceInfo(id);
    } catch (error) {
      alert(error);
    }

  }
  const updateService = async () => {
    try {
      const response = await updateServiceInfo(id, {
        description: serviceDetails.description,
        vehicleModel: serviceDetails.vehicle_model,
        vehicleBrand: serviceDetails.vehicle_brand,
        vehicleYear: serviceDetails.vehicle_year,
      });
      getServiceInfo(id);
      setIsUpdate(false);
      alert(response.data)
    } catch (error) {
      alert(error.response.data)
    }
  }

  const allWorkshopMechanical = async () => {
    const { data } = await getAllWorkshopMechanicals(userInfo.workshop_id.toString());
    setWorkshopMechanicals(data);
  }

  useEffect(() => {
    if (!userInfo.user_role) history.push('/');
    getServiceInfo(id);
    allWorkshopMechanical()
  }, []);

  return (
    <>
      {userInfo.user_role === 'CLIENT' ? <UserHeader /> : <WorkshopHeader />}
      <MainStyled md>
        <DetailServiceHeader>
          <h2 style={{ color: '#056CF9 ' }}>Detalhes do serviço</h2>

          {userInfo.user_role === 'CLIENT' && userInfo.user_id === userDetails.user_id && serviceInfo.status === 'OPEN' && (
            <div>
              <BtnChangeStatusService
                edit
                type="button"
                value="Editar"
                onClick={onEditService}
              />

              <BtnChangeStatusService
                delete
                type="button"
                value="Excluir"
                onClick={btnDeleteService}
              />
            </div>

          )}

          {userInfo.user_role === 'MANAGER' && serviceInfo.status === 'OPEN' && (
            <div>
              <SelectStyled
                value={mechanicalId}
                onChange={(e) => setMechanicalSelected(e.target.value)}
                md
              >
                <OptionStyled
                  value="Mecânicos"
                  selected
                  disabled
                >Mecânicos</OptionStyled>
                {workshopMechanicals.map(({ mechanical_name, mechanical_id }) => (
                  <OptionStyled
                    value={mechanical_id}
                    key={mechanical_id}
                  >{mechanical_name}</OptionStyled>
                ))}
              </SelectStyled>
              <BtnChangeStatusService
                edit
                type="button"
                value="Atribuir serviço"
                disabled={mechanicalId === 'Mecânicos'}
                onClick={updateServiceByManagers}
              />
            </div>

          )}

          {userInfo.user_role === 'ADMIN' && serviceInfo.status === 'OPEN' && (
            <div>
              <SelectStyled
                value={mechanicalId}
                onChange={(e) => setMechanicalSelected(e.target.value)}
                md
              >
                <OptionStyled
                  value="Mecânicos"
                  selected
                  disabled
                >Mecânicos</OptionStyled>
                {workshopMechanicals.map(({ mechanical_name, mechanical_id }) => (
                  <OptionStyled
                    value={mechanical_id}
                    key={mechanical_id}
                  >{mechanical_name}</OptionStyled>
                ))}
              </SelectStyled>
              <BtnChangeStatusService
                edit
                type="button"
                value="Atribuir serviço"
                disabled={mechanicalId === 'Mecânicos'}
                onClick={updateServiceByManagers}
              />
            </div>

          )}

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

      {
        isUpdate && <MainStyled md>
          <DetailServiceHeader>
            <h2 style={{ color: '#056CF9 ' }}>Preencha as informações</h2>

            <div>
              <BtnChangeStatusService
                edit
                type="button"
                value="Salvar alterações"
                onClick={updateService}
              />

              <BtnChangeStatusService
                delete
                type="button"
                value="Cancelar"
                onClick={() => setIsUpdate(false)}
              />
            </div>

          </DetailServiceHeader>

          <DetailServiceMain>

            <SectionStyled>
              <div>
                <h3 style={{ color: "green" }}>Descrição</h3>
                <input
                  value={serviceDetails.description}
                  onChange={handleChange}
                  name="description"
                  type="text" />
              </div>

            </SectionStyled>


            <div>
              <hr />
              <h3 style={{ color: "green" }}>Informações do Veículo</h3>

              <div>
                <span>Modelo:</span>
                <input
                  type="text"
                  value={serviceDetails.vehicle_model}
                  name="vehicle_model"
                  onChange={handleChange}
                />
              </div>

              <div style={{ marginTop: "8px" }}>
                <span>Marca:</span>
                <input
                  type="text"
                  value={serviceDetails.vehicle_brand}
                  name="vehicle_brand"
                  onChange={handleChange}
                />
              </div>

              <div style={{ marginTop: "8px" }}>
                <span>Ano:</span>
                <input
                  type="number"
                  value={serviceDetails.vehicle_year}
                  name="vehicle_year"
                  onChange={handleChange}
                />
              </div>
            </div>

          </DetailServiceMain>
        </MainStyled>
      }

    </>
  )
}

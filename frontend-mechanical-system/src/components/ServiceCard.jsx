import React from 'react'

import { CardItem, CardItemStatus, CardItemWorkshop, CartItemInfo } from '../styles/Service.styled'

export default function ServiceCard({ service }) {

  return (
    <CardItem to={`/services/detail/${service.service_id}`}>
      <CartItemInfo>
        <span>Serviço</span>
        <span>000{service.service_id}</span>
      </CartItemInfo>

      <CardItemStatus
        open={service.status === 'OPEN' ? true : false}
      >
        {service.status}
      </CardItemStatus>

      <CardItemWorkshop>
        <div style={{ fontWeight: 'bolder' }}>{service.user.user_address}</div>

        <span>{service.vehicle_model}, {service.vehicle_brand} - {service.vehicle_year}</span>
      </CardItemWorkshop>
    </CardItem>
  )
}

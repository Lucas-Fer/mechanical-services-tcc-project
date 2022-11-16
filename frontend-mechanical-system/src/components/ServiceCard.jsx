import React, { useContext, useEffect, useState } from 'react'

import { CardItem, CardItemStatus, CardItemWorkshop, CartItemInfo } from '../styles/Service.styled'

export default function ServiceCard({ service }) {

  return (
    <CardItem>
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
        <div>
          <div>{service.user.user_address}</div>
        </div>

        <span>{service.vehicle_model}, {service.vehicle_brand} - {service.vehicle_year}</span>
      </CardItemWorkshop>
    </CardItem>
  )
}

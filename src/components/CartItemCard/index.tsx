import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { baseURL } from '../../services/api';
import { colors } from '../../styles';

import {
  Container,
  Img,
  RemoveItemButton,
  IternalContainerLeft,
  ProductName,
  IternalContainerRight,
  PriceText,
  InfoLabel,
  ButtonText,
} from './styles';
import { priceFormat } from '../../utils';

interface CartItemCardProps {
  photo: string;
  name: string;
  quantity: number;
  price: number;
  handleDelete(): void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({
  photo,
  name,
  quantity,
  price,
  handleDelete,
}) => {
  return (
    <Container>
      <IternalContainerLeft>
        <ProductName>{name}</ProductName>
        <InfoLabel>{`Quantidade: ${quantity}`}</InfoLabel>
        <RemoveItemButton onPress={handleDelete}>
          <MaterialIcons
            name="delete-forever"
            size={18}
            color={`${colors.red}`}
          />
          <ButtonText>Remover</ButtonText>
        </RemoveItemButton>
      </IternalContainerLeft>
      <IternalContainerRight>
        {/* <Img source={{ uri: `${baseURL}${photo}` }} /> */}
        <Img source={{ uri: `${photo}` }} />
        <PriceText>{price.toLocaleString('pt-BR', priceFormat)}</PriceText>
      </IternalContainerRight>
    </Container>
  );
};

export default CartItemCard;

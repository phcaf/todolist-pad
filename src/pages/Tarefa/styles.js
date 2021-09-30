import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  background-color: #E5E5E5;
`

export const Header = styled.View`
  height: 128px;
  width: 100%;
  background-color: #fff;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;
  align-items: center;
  justify-content: center;
`
export const HeaderTexto = styled.Text`
  font-size: 24px;
  font-weight: bold;
`
export const Tarefa = styled.View`
  margin-top: 46px;
  width: 100%;
  height: 370px;
  background: #fff;
  border-radius: 10px;
`

export const TituloTarefa = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
`

export const DescriçãoTarefa = styled.Text`
  margin-top: 8px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 14px;
  color: rgba(0, 0, 0, 0.5);
`

export const Botão1 = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #6200EE;
  border-radius: 4px;
  margin-top: 26px;
  align-items: center;
  justify-content: center;
`

export const Botão2 = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #EB3223;
  border-radius: 4px;
  margin-top: 26px;
  align-items: center;
  justify-content: center;
`

export const TextoBotões = styled.Text`
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
`
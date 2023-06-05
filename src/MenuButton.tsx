import { SyntheticEvent } from 'react'
import './MenuBtn.css'

interface IProps {
  children: string;
  onClickToggle: (e: SyntheticEvent) => void
}

export default function MenuButton({onClickToggle}: IProps) {
  return <button id='roundBtn' onClick={onClickToggle}  />
}
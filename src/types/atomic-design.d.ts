export interface IButton {
  classType: 'primary' | 'success' | 'info' | 'alert' | 'danger' | 'disable'
  width?: string
  textOfButton: string
  onClick?: () => void
}

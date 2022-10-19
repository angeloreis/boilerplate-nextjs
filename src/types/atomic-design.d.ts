export interface IButton {
  classType: 'primary' | 'success' | 'info' | 'alert' | 'danger' | 'disable'
  textOfButton: string
  width?: string
  isLoading?: boolean
  onClick?: () => void
}

const Header = () => {
  return (
    // way to access env variables
    <div>{import.meta.env.VITE_API_URL}</div>
  )
}

export default Header
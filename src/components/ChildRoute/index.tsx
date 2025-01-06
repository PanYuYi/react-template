import { Outlet, useLocation } from 'react-router-dom'

export default function ChildRoute(props) {
  console.log('props >>>>>  ', props)
  const location = useLocation()
  console.log('location >>>>>  ', location)
  const hiddenParent = true

  if (hiddenParent) {
    return <Outlet></Outlet>
  } else {
    props.element
  }
}

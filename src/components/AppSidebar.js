import React, { useContext, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cilAccountLogout, cilTransfer } from '@coreui/icons'
import { CSidebar, CSidebarBrand, CSidebarNav, CHeaderNav, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link, NavLink } from 'react-router-dom'
import { AppSidebarNav } from './AppSidebarNav'
import AuthContext from 'src/context/AuthContext'
import './AppSidebar.css'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
// import ColorSelector from './colorsetting'
import useAxios from 'src/utils/useAxios'
import { useColor } from 'src/menu/adminsetting/colorcontext'
import 'src/index.css'
// sidebar nav config
import _nav1 from '../_nav'
import baseurl from 'src/utils/baseurl'
import { _nav2, _nav3, _nav4, _nav5, _nav6, _nav7, _nav8 } from '../_nav'
import defaultlogo from 'src/assets/images/default_logo.png'
const AppSidebar = ({ color }) => {

  var urlurl=window.location.origin
  let urlArry=urlurl.split('.');
  let path="/media/"+urlArry[0].split('//')[1]+"/anonymous.jpg"
let path1="/public/default_logo.png"

  const dispatch = useDispatch()
  const api = useAxios()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const { user, authTokens, logoutUser } = useContext(AuthContext)
  // console.log(user)
  // console.log(authTokens)
  const [logoUrl, setLogoUrl] = useState()

  const [faviconUrl, setFaviconUrl] = useState('')
  let [notes2, setNotes2] = useState([])
  const baseURL = baseurl()
  const { selectedColor } = useColor() // Access selectedColor from context
  useEffect(() => {
    getTopic()
  }, [logoUrl])

  const getTopic = async () => {
    try {
      const response = await api.get('/machine/site_settings_api_for_logo/')
      if (response.data.success === 1) {
        setLogoUrl(response.data.result.logo)
        // setFaviconUrl(response.data.result.favicon);
        
      } else if (response.data.success === 0) {
        // Handle failure
        console.error('Failed to fetch logo and favicon')
      }
    } catch (error) {
      console.error('Error fetching logo and favicon:', error)
    }
  }
  // let get_aboutus = async () => {
  //   let response1 = await api.get('/machine/site_settings_api_for_logo/')
  //   if (response1.status === 200) {
  //     for (var i = 0; i < response1.data.result.length; i++) {
  //       let a = response1.data.result[i]
  //       // console.log(a)
  //       setNotes2(a)
  //     }
  //     // console.log('data:', response.data.result)
  //   } else {
  //     alert('something went wrong')
  //   }
  // }

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
      style={{ backgroundColor: selectedColor }}
      // style={{ backgroundColor:'#6b88fe'}} // Set both background colors
    >
      {/* <CSidebarBrand className="d-none d-md-flex " to="/"  style={{ backgroundColor: selectedColor }}> */}
      <CSidebarBrand className="d-none d-md-flex" to="/" style={{ backgroundColor: selectedColor }}>
        <CHeaderNav>
          <CRow sm={12}>
            <CCol sm={12} className="profile_photo_col text-center mb-1 ">
              {/* {logoUrl &&  <img
                src={logoUrl}
                className="sidebar-brand-full"
                height={50}
                width={150}
                style={{ marginRight: '10px', backgroundColor: "white", borderRadius: "10%", background: selectedColor }}
                // style={{ marginRight: '10px', backgroundColor:"white" ,borderRadius:"10%" ,background: selectedColor}}
              />
            } */}

              {/* {logoUrl && <img src={baseURL + logoUrl}   className="sidebar-brand-full"
          height={60}
          width={100}
          style={{ marginRight: '10px' }} alt="Current Logo" />} */}
              {logoUrl && (
                <img
                  src={baseURL + logoUrl}
                  className="sidebar-brand-full"
                  height={50} // Adjust the height here
                  width={150} // Adjust the width here
                  style={{ marginRight: '10px', marginTop: '10px' }}
                  alt="Current Logo"
                />
              )}
                 {/* {(
                  logoUrl == null || 
                  logoUrl === undefined ||
                  // logoUrl==path ||
                  // logoUrl=="/media/public/anonymous.jpg" ||
                  logoUrl.length <= 0
                  )?(
                    <img
                    src={defaultlogo}
                    className="sidebar-brand-full"
                    height={50} // Adjust the height here
                    width={150} // Adjust the width here
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    alt="Current Logo"
                  />
                  ):(
                    <img
                    src={logoUrl}
                    className="sidebar-brand-full"
                    height={50} // Adjust the height here
                    width={150} // Adjust the width here
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    alt="Current Logo"
                  />
                  )} */}
            </CCol>
          </CRow>
        </CHeaderNav>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          {/* <AppSidebarNav items={_nav1} /> */}
          {(() => {
            if (authTokens.user.role == '1') {
              return <AppSidebarNav items={_nav1} />
            } else if (authTokens.user.role == '2') {
              return <AppSidebarNav items={_nav2} />
            } else if (authTokens.user.role == '3') {
              return <AppSidebarNav items={_nav3} />
            } else if (authTokens.user.role == '4') {
              return <AppSidebarNav items={_nav4} />
            }
          })()}
        </SimpleBar>
      </CSidebarNav>
      {/* <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      /> */}
      <div style={{ padding: '10px 14px', backgroundColor: selectedColor }}>
        <NavLink
          to="/login"
          style={{ color: 'white', textDecoration: 'none' }}
          onClick={logoutUser}
        >
          <CIcon
            icon={cilAccountLogout}
            style={{ color: 'white', marginLeft: '8px', fontWeight: '600' }}
            size="lg"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="div" style={{ fontSize: '18px', fontWeight: '600', color: 'white' }}>
            Logout
          </span>
        </NavLink>
      </div>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)

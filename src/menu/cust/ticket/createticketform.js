
// import React, { useState, useEffect, useContext } from 'react';
// import {
//   CButton,
//   CFormInput,
//   CForm,
//   CModal,
//   CModalHeader,
//   CModalTitle,
//   CModalBody,
//   CModalFooter,
//   CRow,
//   CCol,
//   CFormLabel,
//   CFormSelect,
//   CFormTextarea,
//   CFormFeedback, CSmartTable,
// } from '@coreui/react-pro';

// import useAxios from 'src/utils/useAxios'
// import { useColor } from 'src/menu/adminsetting/colorcontext';
// const Complaint = () => {
//   const [notes, setNotes] = useState([]);
//   let api = useAxios()
//   let [notes1, setNotes1] = useState([])

//   const [visible1, setVisible1] = useState(false);

//   const [validated, setValidated] = useState(false);
//   const [isDisabled, setIsDisabled] = useState(false);
//   const { selectedColor } = useColor();
//   useEffect(() => {
//     getTopic();
//   }, []);

//   let getTopic = async () => {
//     let response = await api.get('ticket/user_machine_mapped/')
//     let response2 = await api.get('ticket/get_ticket_list_customer/')
//     console.log(response.data.result.length)
//     if (response.data.success === 1 && response2.data.success === 1) {
//       let data = []
//       let data2 = []
//       for (let i = 0; i < response.data.result.length; i++) {
//         let a = response.data.result[i]
//         let machinids = { id: a.id, mid: a.machine_map }
//         data2.push(machinids.mid);
//       }
//       for (let i = 0; i < response2.data.result.length; i++) {
//         let a = response2.data.result[i]
//         let options = {
//           ticket_no: a.ticsrno,
//           date: formatDate1(a.created_at),
//           time: formatTime(a.created_at),
//           title: a.title,
//           machine_map: a.machine_map,
//           // assigned_to: '',
//           priority: a.priority,
//           status: a.status,
//           problem_type: a.problem_type,
//           discription: a.description,
//           note: a.notes
//         };
//         data.push(options)
//       }
//       setNotes(data)
//       setNotes1(data2)
//     } else if (response.data.success === 0) {
//       // for (let i = 0; i < Object.values(response.data.result).length; i++) {
//       //   let a = Object.values(response.data.result)[i]
//       //   alert(a)
//       // }
//       console.log('hhhhhhhhh')
//     }
//   }
//   const getrefresh = () => {
//     window.location.reload();
//   };

//   const saveTopic = async (e) => {
//     const form = e.currentTarget;
//     e.preventDefault();
//     if (form.checkValidity() === true) {
//       const uploadData = new FormData(e.target);
//       // uploadData.append('machine_mapping',1);
//       let response = await api.post('/ticket/create_ticket/', uploadData);

//       // console.log(e.machine_map + "santosh");

//       // for (let i = 0; i < notes1.length; i++) {
//       //   if (notes1[i].mid == e.machine_map) {
//       //     uploadData.append('machine_map', notes1[i].id)
//       //   }
//       // }
//       // uploadData.append('machine_mapping',1);
//       // let response = await api.post('/machine/ticket/', uploadData);
//       if (response.data.success === 1) {
//         alert('Ticket is Created');
//         setValidated(false);
//         setVisible1(false);
//         getTopic();
//         getrefresh();
//       } else if (response.data.success === 0) {
//         for (let i = 0; i < Object.values(response.data.result).length; i++) {
//           let a = Object.values(response.data.result)[i];
//           alert(a);
//         }
//       }
//     }
//     else {
//       setValidated(true);
//     }
//   };
//   const columns = [
//     {
//       key: 'sr_no',
//       label: 'Sr No',
//       _props: { color: 'secondary', className: 'fw-semibold' },

//     },
//     {
//       label: 'Ticket No',
//       key: 'ticket_no',
//       _props: { color: 'secondary', className: 'fw-semibold' },

//     },
//     {
//       label: 'Date',
//       key: 'date',
//       _props: { color: 'secondary', className: 'fw-semibold' },

//     },
//     {
//       label: 'Time',
//       key: 'time',
//       _props: { color: 'secondary', className: 'fw-semibold' },

//     },
//     {
//       label: 'Title',
//       key: 'title',
//       _props: { color: 'secondary', className: 'fw-semibold' },

//     },
//     {
//       label: 'Machine ID',
//       key: 'machine_map',

//       _props: { color: 'secondary', className: 'fw-semibold' },

//     },
//     // {
//     //   label: 'Assinged To',
//     //   key: 'assigned_to',
//     //   _props: { color: 'secondary', className: 'fw-semibold' },

//     // },
//     {
//       label: 'Priority',
//       key: 'priority',

//       _props: { color: 'secondary', className: 'fw-semibold' },

//     },
//     {
//       key: 'status',
//       label: 'Status',

//       _props: { color: 'secondary', className: 'fw-semibold' },

//     },
//     {
//       key: 'problem_type',
//       label: 'Problem Type',

//       _props: { color: 'secondary', className: 'fw-semibold' },

//     },
//     {
//       key: 'discription',
//       label: 'Description',

//       _props: { color: 'secondary', className: 'fw-semibold' },

//     },
//     // {
//     //   key: 'note',
//     //   label: 'Note',

//     //   _props: { color: 'secondary', className: 'fw-semibold' },

//     // },
//   ]
//   function formatDate1(date) {
//     if (date == null) {
//       return
//     }
//     var d = new Date(date),
//       month = '' + (d.getMonth() + 1),
//       day = '' + d.getDate(),
//       year = d.getFullYear()

//     if (month.length < 2) month = '0' + month
//     if (day.length < 2) day = '0' + day

//     return [year, month, day].join('-')
//   }

//   const formatTime = (dateString) => {
//     if (dateString == null) {
//       return "          ";
//     }
//     const date = new Date(dateString)
//     const day = String(date.getDate()).padStart(2, '0')
//     const monthNames = [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Sep',
//       'Oct',
//       'Nov',
//       'Dec',
//     ]
//     const month = monthNames[date.getMonth()]
//     const year = date.getFullYear()
//     const hours = String(date.getHours()).padStart(2, '0')
//     const minutes = String(date.getMinutes()).padStart(2, '0')
//     return `${hours}:${minutes}`
//   }
//   return (
//     <>
//       {/* <Header /> */}

//       <div className="mb-3">
//         <div className="d-flex justify-content-between align-items-center mb-2">

//           <CButton
//             onClick={() => {
//               setVisible1(!visible1)
//             }}
//             className="mt-2"

//             style={{ backgroundColor: selectedColor, color: 'white', border: '0px' }}
//           >
//             Create Ticket
//           </CButton>
//         </div>

//         <CRow>
//           <CCol xs={12}>
//             <CSmartTable
//               activePage={1}
//               clickableRows
//               columns={columns}

//               items={notes}
//               itemsPerPageSelect
//               itemsPerPage={10}
//               pagination
//               scopedColumns={{

//                 sr_no: (item, index) => <td>{index + 1}</td>

//               }}
//               // sorterValue={{ coloumns: 'created_at', state: 'asc' }}
//               itemsPerPageOptions={[10, 20, 50, 100]}
//               // tableFilter
//               tableProps={{
//                 color: 'success-color-secondary',
//                 hover: true,
//                 border: '1.5px solid #074',
//                 responsive: true,
//               }}
//               tableHeadProps={{
//                 color: 'light',
//                 align: 'middle',
//                 className: 'align-middle',
//               }}
//               tableBodyProps={{
//                 align: 'middle',
//                 className: 'align-middle',
//               }}
//               // tableFilterLabel={'Search : '}
//               // tableFilterPlaceholder={'Enter String to Search'}
//               itemsPerPageLabel={'Rows per page:'}
//             />
//           </CCol>
//         </CRow>
//       </div>

//       {/* <CRow className='mx-5 mt-5 mb-5'>
//         {/* <CCol xs={12} md={6} className="d-flex justify-content-center align-items-center mb-3">
//           <CImage src={GifSrc} style={{ maxWidth: '100%', height: '100%', width: '100%' }} />
//         </CCol> */}
//       {/* <CCol className="d-flex justify-content-center align-items-center mb-3"> */}
//       {/* <CCard style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '10px', height: '600px' }}> */}

//       <CModal
//         size={'lg'}
//         visible={visible1}
//         onClose={() => [setVisible1(false), setValidated(false), setIsDisabled(false)]}
//         backdrop="static"
//       // style={false?( {transition: 'filter 0.3s',filter: 'blur(5px)'}):{}}
//       >
//         <CModalHeader
//           onClose={() => [setVisible1(false), setValidated(false), setIsDisabled(false)]}
//           style={{ backgroundColor: selectedColor, color: 'white' }}
//         >
//           <CModalTitle>Create Ticket</CModalTitle>
//         </CModalHeader>
//         <CForm
//           className="needs-validation mt-4"
//           noValidate
//           validated={validated}
//           onSubmit={saveTopic}
//         >
//           <CModalBody>

//             <CRow className="justify-content-center mx-4">
//               {/* <b className='justify-content-center mx-4'>Create Ticket</b> */}
//               <CRow >
//                 <CCol sm={6}>
//                   <CFormLabel htmlFor="validationDefault01">
//                     Title<span className="text-danger">*</span>
//                   </CFormLabel>
//                   <CFormInput
//                     type="text"
//                     id="title"
//                     name="title"
//                     required
//                     pattern="[A-Za-z\s]+"
//                     //   defaultValue={userdata?.name}
//                     maxLength={50}
//                   />
//                   <CFormFeedback invalid>Please enter the title</CFormFeedback>
//                 </CCol>
//                 <CCol sm={6}>

//                   <CFormLabel htmlFor="validationDefault01">
//                     Machine ID<span className="text-danger">*</span>
//                   </CFormLabel>
//                   <CFormSelect
//                     name="machine_map"
//                     id="machine_map"
//                     options={notes1}
//                     required />
//                   <CFormFeedback invalid>Please select Machine id</CFormFeedback>
//                 </CCol>
//               </CRow>
//               <CRow sm={12} className="">
//                 <CCol sm={6}>

//                   <CFormLabel htmlFor="validationDefault01">
//                     Problem Type<span className="text-danger">*</span>
//                   </CFormLabel>
//                   <CFormSelect
//                     name="problem_type"
//                     id='problem_type'
//                     // options={notes2}
//                     required >
//                     <option>Choose...</option>
//                     <option value="software">Software</option>
//                     <option value="hardware">Hardware</option>
//                     <option value="other">Other</option>
//                   </CFormSelect>
//                   <CFormFeedback invalid>Please select Problem type </CFormFeedback>
//                 </CCol>
//                 <CCol sm={6}>

//                   <CFormLabel htmlFor="validationDefault01">
//                     Priority<span className="text-danger">*</span>
//                   </CFormLabel>
//                   <CFormSelect
//                     name="priority"
//                     id='priority'
//                     // options={notes2}
//                     required >
//                     <option>Choose...</option>
//                     <option value="low">Low</option>
//                     <option value="medium">Medium</option>
//                     <option value="high">High</option>
//                   </CFormSelect>
//                   <CFormFeedback invalid>Please select Problem type </CFormFeedback>
//                 </CCol>
//               </CRow>




//               <CRow sm={12} className="">


//                 <CCol sm={6}>
//                   <CFormLabel htmlFor="validationDefault01">
//                     Description<span className="text-danger">*</span>
//                   </CFormLabel>
//                   <CFormTextarea
//                     type="text"
//                     id="description"
//                     //   defaultValue={userdata?.address1}
//                     name="description"
//                     rows={3}
//                     required
//                     maxLength={200}
//                   />
//                   <CFormFeedback invalid>Please enter the description</CFormFeedback>
//                 </CCol>
//               </CRow>
//               {/* <CRow sm={12} className="">
//               <CCol sm={6}>
//                 <CFormLabel htmlFor="validationDefault01">
//                   Note<span className="text-danger">*</span>
//                 </CFormLabel>
//                 <CFormTextarea
//                   type="text"
//                   id="notes"
//                   // //   defaultValue={userdata?.address1}
//                   name="notes"
//                   rows={3}
//                   required
//                   maxLength={200}
//                 />
//                 <CFormFeedback invalid>Please enter the note</CFormFeedback>
//               </CCol>

//             </CRow> */}
//             </CRow>
//           </CModalBody>

//           <CModalFooter>
//             <CButton
//               // onClick={() => [setVisible2(false), setValidated(false)]}
//               onClick={() => [setVisible1(false), setValidated(false), setIsDisabled(false)]}
//               style={{ backgroundColor: '#F5F5F5', color: 'black', borderColor: '#DCDCDC' }}
//             >
//               &nbsp;Close&nbsp;
//             </CButton>
//             <CButton type="submit" style={{ backgroundColor: selectedColor, color: 'white' }} >
//               &nbsp;Submit
//             </CButton>
//           </CModalFooter>
//         </CForm>
//       </CModal>
//       {/* </CCard>
//         </CCol>


//       </CRow> */}


//       {/* <Footer /> */}


//     </>
//   );
// };

// export default Complaint;















import React, { useState, useEffect } from 'react';
import {
  CButton,
  CFormInput,
  CForm,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CRow,
  CCol,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CFormFeedback,
  CSmartTable,
} from '@coreui/react-pro';
import useAxios from 'src/utils/useAxios';
import { useColor } from 'src/menu/adminsetting/colorcontext';

const Complaint = () => {
  const [notes, setNotes] = useState([]);
  const [notes1, setNotes1] = useState([]);
  const [visible1, setVisible1] = useState(false);
  const [validated, setValidated] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { selectedColor } = useColor();
  const api = useAxios();

  useEffect(() => {
    getTopic();
  }, []);

  const getTopic = async () => {
    try {
      let response = await api.get('ticket/user_machine_mapped/');
      console.log(response,'ressoponsee')
      let response2 = await api.get('ticket/get_ticket_list_customer/');

      if (response.data.success === 1 && response2.data.success === 1) {
        const data = response2.data.result.map((item, index) => ({
          sr_no: index + 1,
          ticket_no: item.ticsrno,
          date: formatDate1(item.created_at),
          time: formatTime(item.created_at),
          title: item.title,
          machine_map: item.machine_map,
          priority: item.priority,
          status: item.status,
          problem_type: item.problem_type,
          description: item.description,
        }));

        const data2 = response.data.result.map(item => ({
          value: item.machine_id,
          label: `${item.machine_id}`,
        }));
        console.log(data2,'datattat')
        setNotes(data);
        setNotes1(data2);
      }
    } catch (error) {
      console.error('Error fetching topics:', error);
    }
  };

  const getrefresh = () => {
    window.location.reload();
  };

  const saveTopic = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === true) {
      const uploadData = new FormData(e.target);
      let response = await api.post('/ticket/create_ticket/', uploadData);

      if (response.data.success === 1) {
        alert('Ticket is Created');
        setValidated(false);
        setVisible1(false);
        getTopic();
        getrefresh();
      } else {
        response.data.result && Object.values(response.data.result).forEach(alert);
      }
    } else {
      setValidated(true);
    }
  };

  const columns = [
    { key: 'sr_no', label: 'Sr No', _props: { color: 'secondary', className: 'fw-semibold' } },
    { key: 'ticket_no', label: 'Ticket No', _props: { color: 'secondary', className: 'fw-semibold' } },
    { key: 'date', label: 'Date', _props: { color: 'secondary', className: 'fw-semibold' } },
    { key: 'time', label: 'Time', _props: { color: 'secondary', className: 'fw-semibold' } },
    { key: 'title', label: 'Title', _props: { color: 'secondary', className: 'fw-semibold' } },
    { key: 'machine_map', label: 'Machine ID', _props: { color: 'secondary', className: 'fw-semibold' } },
    { key: 'priority', label: 'Priority', _props: { color: 'secondary', className: 'fw-semibold' } },
    { key: 'status', label: 'Status', _props: { color: 'secondary', className: 'fw-semibold' } },
    { key: 'problem_type', label: 'Problem Type', _props: { color: 'secondary', className: 'fw-semibold' } },
    { key: 'description', label: 'Description', _props: { color: 'secondary', className: 'fw-semibold' } },
  ];

  const formatDate1 = (date) => {
    if (!date) return '';
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const formatTime = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <>
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <CButton
            onClick={() => setVisible1(!visible1)}
            className="mt-2"
            style={{ backgroundColor: selectedColor, color: 'white', border: '0px' }}
          >
            Create Ticket
          </CButton>
        </div>

        <CRow>
          <CCol xs={12}>
            <CSmartTable
              activePage={1}
              clickableRows
              columns={columns}
              items={notes}
              itemsPerPageSelect
              itemsPerPage={10}
              pagination
              scopedColumns={{
                sr_no: (item, index) => <td>{index + 1}</td>,
              }}
              itemsPerPageOptions={[10, 20, 50, 100]}
              tableProps={{
                color: 'success-color-secondary',
                hover: true,
                border: '1.5px solid #074',
                responsive: true,
              }}
              tableHeadProps={{
                color: 'light',
                align: 'middle',
                className: 'align-middle',
              }}
              tableBodyProps={{
                align: 'middle',
                className: 'align-middle',
              }}
              itemsPerPageLabel={'Rows per page:'}
            />
          </CCol>
        </CRow>
      </div>

      <CModal
        size={'lg'}
        visible={visible1}
        onClose={() => { setVisible1(false); setValidated(false); setIsDisabled(false); }}
        backdrop="static"
      >
        <CModalHeader
          onClose={() => { setVisible1(false); setValidated(false); setIsDisabled(false); }}
          style={{ backgroundColor: selectedColor, color: 'white' }}
        >
          <CModalTitle>Create Ticket</CModalTitle>
        </CModalHeader>
        <CForm
          className="needs-validation mt-4"
          noValidate
          validated={validated}
          onSubmit={saveTopic}
        >
          <CModalBody>
            <CRow className="justify-content-center mx-4">
              <CRow>
                <CCol sm={6}>
                  <CFormLabel htmlFor="title">Title<span className="text-danger">*</span></CFormLabel>
                  <CFormInput
                    type="text"
                    id="title"
                    name="title"
                    required
                    pattern="[A-Za-z\s]+"
                    maxLength={50}
                  />
                  <CFormFeedback invalid>Please enter the title</CFormFeedback>
                </CCol>
                <CCol sm={6}>
                  <CFormLabel htmlFor="machine_map">Machine ID<span className="text-danger">*</span></CFormLabel>
                  <CFormSelect
                    name="machine_map"
                    id="machine_map"
                    options={notes1}
                    required
                  />
                  <CFormFeedback invalid>Please select Machine ID</CFormFeedback>
                </CCol>
              </CRow>
              <CRow>
                <CCol sm={6}>
                  <CFormLabel htmlFor="problem_type">Problem Type<span className="text-danger">*</span></CFormLabel>
                  <CFormSelect
                    name="problem_type"
                    id='problem_type'
                    required
                  >
                    <option>Choose...</option>
                    <option value="software">Software</option>
                    <option value="hardware">Hardware</option>
                    <option value="other">Other</option>
                  </CFormSelect>
                  <CFormFeedback invalid>Please select Problem type</CFormFeedback>
                </CCol>
                <CCol sm={6}>
                  <CFormLabel htmlFor="priority">Priority<span className="text-danger">*</span></CFormLabel>
                  <CFormSelect
                    name="priority"
                    id='priority'
                    required
                  >
                    <option>Choose...</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </CFormSelect>
                  <CFormFeedback invalid>Please select Priority</CFormFeedback>
                </CCol>
              </CRow>
              <CRow>
                <CCol sm={6}>
                  <CFormLabel htmlFor="description">Description<span className="text-danger">*</span></CFormLabel>
                  <CFormTextarea
                    type="text"
                    id="description"
                    name="description"
                    rows={3}
                    required
                    maxLength={200}
                  />
                  <CFormFeedback invalid>Please enter the description</CFormFeedback>
                </CCol>
              </CRow>
            </CRow>
          </CModalBody>
          <CModalFooter>
            <CButton
              onClick={() => { setVisible1(false); setValidated(false); setIsDisabled(false); }}
              style={{ backgroundColor: '#F5F5F5', color: 'black', borderColor: '#DCDCDC' }}
            >
              &nbsp;Close&nbsp;
            </CButton>
            <CButton type="submit" style={{ backgroundColor: selectedColor, color: 'white' }}>
              &nbsp;Submit
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </>
  );
};

export default Complaint;

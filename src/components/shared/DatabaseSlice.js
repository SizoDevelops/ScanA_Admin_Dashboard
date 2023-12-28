const { createSlice } = require("@reduxjs/toolkit");


const DatabaseSlice = createSlice({
    name: "Database",
    initialState: { 
        value: {  school_name: '',
        school_slogan: '',
        school_email: '',
        school_number: '',
        school_meetings: [],
        attendance: {
            currentWeek: 0,
            friday: "",
            monday: "",
            thursday: "",
            tuesday: "",
            wednesday: ""
          },
        coordinates: {
            latitude: "",
            longitute: "",
            distance: 200
        },
        school_address: {
            line_one: '',
            line_two: '',
            province: '',
            city: '',
            zip_code:''
        },
        members: [],
        school_admin: {
            admin_name: '',
            admin_email: '',
            admin_code: ''
        }}
    },
    reducers:{
        setSchool: (state, action) => {
            state.value = action.payload
     
        },
        updateSchool: (state, action) => {

        },
        setMember: (state, action) => {
            state.value.members.push(action.payload)
        },
        updateMember: (state, action) => {
           state.value.members.map(items => {
            if(items.id === action.payload.id){
                if(action.payload.pause_register === true || action.payload.pause_register === false){
                    items.pause_register = action.payload.pause_register
                }
                
                if(action.payload.block_user === true || action.payload.block_user === false){
                    items.block_user = action.payload.block_user
                }
                
            }
           })
        },
        deleteUser: (state, action) => {
            if(action.payload.delete_user === true){
               state.value.members.filter(elem => elem.id !== action.payload.id) 
            }
        }

    }
})


export const {setSchool, updateSchool,setMember,updateMember,deleteUser} = DatabaseSlice.actions
export default DatabaseSlice.reducer
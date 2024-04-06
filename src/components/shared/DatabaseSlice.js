const { createSlice } = require("@reduxjs/toolkit");


const DatabaseSlice = createSlice({
    name: "Database",
    initialState: { 
        value: {  school_name: '',
        school_slogan: '',
        school_email: '',
        school_number: '',
        school_meetings: [],
        posts: [],
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
        movementCodes: [],
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
        setMember: (state, action) => {
            state.value.members.push(action.payload)
        },
        updateMember: (state, action) => {
           if(state.value.members.find(elem => elem.id === action.payload.id)){
            let member = state.value.members.find(elem => elem.id === action.payload.id)
            for(const key in member){
                let item = member[key]
                for(const items in action.payload){
                    let i = action.payload[items]
                    if(item !== i){
                      let lem =  state.value.members.filter(items => items.id !== action.payload.id)
                      lem.push(action.payload)
                      return;
                    }
                }
            }
           }
        },
        deleteUser: (state, action) => {
            if(action.payload.delete_user === true){
               state.value.members.filter(elem => elem.id !== action.payload.id) 
            }
        },
        uploadMeetings: (state, action) => {
            if(!state.value.school_meetings.find(elem => elem.id === action.payload.id)){
                state.value.school_meetings.push(action.payload)
            }
        },
        deleteMeeting: (state, action) => {
            state.value.school_meetings.filter(items => items.id !== action.payload.id)
        },


    }
})


export const {setSchool, updateSchool,setMember,updateMember,deleteUser,uploadMeetings,deleteMeeting} = DatabaseSlice.actions
export default DatabaseSlice.reducer
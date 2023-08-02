import { Deta } from "deta";

const deta = Deta("d01n65bwxzp_V1YLdayLMvKQvrnGBYG5jsNkXJZDb6uy")

const connectToDB  = () => {
    const DB = deta.Base("schools_db")
    return DB;
}



export default connectToDB;
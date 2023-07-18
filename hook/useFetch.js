import { useState, useEffect } from "react";
import axios from "axios";
import { exp } from "react-native-reanimated";


const useFetch = (endpoint, query)=>{
    const [data, setData]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': '0151a37c21mshe5a394a1e11341dp1b9ae2jsn736d4d4095e6',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
          ...query
        },
      };


      const fetchData = async () =>{
          setIsLoading(true)
          try {
              const response = await axios.request(options)
              setData(response.data.data)
              setIsLoading(false)
          } catch (error) {
              setError(error)
              alert('There is an error')
          } finally {
              setIsLoading(false)
          }
      }
      
      
      useEffect(()=>{
          fetchData();   
      }, [])
      
      const refetch = ()=>{
          setIsLoading(true)
          fetchData();
      }

      return { data, isLoading, error, refetch }
}
 
export default useFetch;
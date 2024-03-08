import React from 'react'

function Cholesterol() {
  const [healthIssues,setHealthIssues] = useState([]);

    

  useEffect(() => {
   
      fetchData();
  }, []);

  async function fetchData() {
      try {
          const response = await axios.get('http://localhost:8000/api/v1/health_issue/list/');
          setHealthIssues(response.data.data);
          console.log(response.data.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }

  const url ="http://localhost:8000/";

  return (
    <div>Cholesterol</div>
  )
}

export default Cholesterol
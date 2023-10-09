

async function generateToken(base_url,client_id,client_secret){
    try {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
          };
          
        const res = await fetch(`${base_url}/identity/oauth/token?grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`, requestOptions)
        const data = await res.json();
    
       return data; 

    } catch (error) { 
        return error; 
    }
  
}

// generateToken();   
 

module.exports = generateToken;  
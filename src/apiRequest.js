const apiRequest = async(url = '',optionsObj, errMessage) => {
    try{
        const response = await fetch(url, optionsObj);
        if(!response.ok) throw Error('Please reload the app');
    }
    catch(err){
       errMessage =  err.message
    }
    finally{
       return errMessage;
    }
}

export default apiRequest;
export function useGetError(error: any) {
  let errorText = '';
  if(error && error.data){
      for(let property in error.data){
          if(errorText != ''){
              errorText += '<br>*';
          }
          else{
              errorText += '*';
          }
          errorText += (Array.isArray(error.data[property])?error.data[property][0]:error.data[property]);
      }
  }
  else{
      errorText = 'Error.';
  }

  return errorText;
}

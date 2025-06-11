export function useEllipsis(value: any, length = 75) {
    let newVal = '';
    if(value){
        if(value.length > length){
            newVal = value.substring(0, length) + '...';
        }
        else{
            newVal = value;
        }
    }
    return newVal;
 }
  
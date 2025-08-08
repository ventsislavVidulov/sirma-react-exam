export const mapCSVToObject = async (CSVReaderAsyncFn, path) => {
    try {
        const res = await CSVReaderAsyncFn(path); //string from the CSV file
        const resArray = res.split('\r\n');
        const resultArray = [];
        const titlesArray = resArray[0].split(','); //takes the titles from the first row of resArray
        for (let i = 1; i < resArray.length; i++) { //iterates trought all the CSV rows except for the title
            const currentObject = {}; 
            if (resArray[i]) { //checks for empty rows
                const currentValues = resArray[i].split(','); 
                for (let j = 0; j < titlesArray.length; j++) { //iterates trough all the object properties
                    currentObject[titlesArray[j]] = currentValues[j]; 
                }
                resultArray.push(currentObject);
            }
        }
        return resultArray;
    } catch (error) {
        console.log(`Failed to map CSV. Error: ${error.message}`);
    }
};
export const mapCSVToObject = async (CSVReaderAsyncFn, path) => {
    try {
        const res = await CSVReaderAsyncFn(path); //string from the CSV file
        const resArray = res.split('\r\n');
        const resultArray = [];
        const titlesArray = textArray[0].split(','); //takes the titles from the first row of resArray
        for (let i = 1; i < textArray.length; i++) { //itterates trough all the CSV rows exept for the title
            const currentObject = {}; 
            const currentValues = resArray[i].split(','); 
            for (let j = 0; j < titlesArray.length; j++) { //itterates trough all the object properties
                currentObject[titlesArray[j]] = currentValues[j]; 
            }
            resultArray.push(currentObject);
        }
        return resultArray;
    } catch (error) {
        console.log(`Failed to map CSV. Error: ${error.message}`);
    }
};
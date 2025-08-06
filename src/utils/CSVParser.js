export const CSVReaderAsync = async (path) => { //fetches files from the public folder
    try {
        const rawData = await fetch(path);

        const pathArray = path.split('/'); //extracting the file name to show it in the console
        const resourseFileName = pathArray[pathArray.length -1];
        console.log(`Fetched ${resourseFileName} data`);

        const data = await rawData.text();
        return data;
    } catch (error) {
        console.log(`Failed to fetch data. Error: ${error.message}`);
    }
};



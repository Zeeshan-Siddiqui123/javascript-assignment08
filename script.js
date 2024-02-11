
    
    function simulateAsyncOperation(shouldSucceed) {
        return new Promise((resolve, reject) => {
          if (shouldSucceed) {
            resolve("Async operation succeeded!");
          } else {
            reject(new Error("Async operation failed!"));
          }
        });
      }
      
      simulateAsyncOperation(true)
      .then((message) => {
        console.log(message);
      })
      .catch((error) => {
        console.error(error);
      });
    
    
      function fetchData() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const data = "Fetched data";
            resolve(data);
          }, 2000);
        });
      }
      
      function processData(data) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const processedData = `Processed ${data}`;
            resolve(processedData);
          }, 2000);
        });
      }
      
      fetchData()
        .then((data) => processData(data))
        .then((processedData) => console.log(processedData))
        .catch((error) => console.error(error));
    
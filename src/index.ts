// Callbacks
interface Callback {
  (data: string): void;
}

function fetchData(callback: Callback) {
  setTimeout(() => {
    const data: string = "Retrieved data!";
    callback(data); // Simulates asynchronous operation completion and passing data to callback
  }, 2000); // Simulates delay for asynchronous operation
}

function processData(data: string) {
  console.log("Data received:", data);
}

fetchData(processData); // Pass processData function as callback

// Promises
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data: string = "Promise fulfilled!";
    resolve(data); // Simulates successful operation and resolving the promise
  }, 2000); // Simulates delay for asynchronous operation
});

promise
  .then((data) => {
    console.log("Promise resolved with:", data);
  })
  .catch((error) => {
    console.error("Promise rejected:", error); // Handles potential rejection
  })
  .finally(() => {
    console.log("Promise execution complete (fulfilled or rejected)");
  });

// Async/Await (requires async function)
async function getData(): Promise<any> {
  // Promise can be used for any data type
  try {
    const response: Response = await fetch("https://api.example.com/data"); // Simulates API call
    const data = await response.json(); // Simulates parsing JSON response
    console.log("Async/await data:", data);
  } catch (error) {
    console.error("Async/await error:", error); // Handles potential errors
  }
}

getData();

// Event Loop (code execution cannot be directly simulated, but conceptual representation provided)

console.log("Start of script (synchronous code)");

setTimeout(() => {
  console.log("Callback function executed (asynchronous operation completed)");
}, 2000);

console.log(
  "Other synchronous code continues to execute while waiting for callbacks"
);

// Event loop manages the call stack (synchronous code) and callback queue (asynchronous operations)
// ensuring smooth execution and responsiveness.

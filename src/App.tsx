// ---------------- useRef -----------------------
// import { useRef, useEffect } from "react"

// const App = () => {
//   const ref = useRef(0)

//   // console.log(ref)
//   // console.log(ref.current) // value store here
//   useEffect(() => {
//     console.log("Component is re-rendered")
//   })

//   const handleClick = () => {
//     ref.current += 1 // ref.current = ref.current + 1
//     console.log(ref.current)
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// export default App

// import { useRef } from "react"

// const App = () => {
//   const inputRef = useRef<any>(null) // <any> for TypeScript

//   console.log(inputRef)

//   const handleClick = () => {
//     if (inputRef.current) {
//       inputRef.current.focus()
//       inputRef.current.style.backgroundColor = "red"
//       inputRef.current.style.height = "300px"
//     }
//   }

//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// export default App

// // ------------- useMemo ----------------------
// import { useMemo, useState } from "react"

// const inputHandler = (value: any) => {
//   let sum = 0
//   for (let i = 0; i < 1000000000; i++) {
//     sum += i
//   }
//   return value
// }

// const App = () => {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")

//   console.log("Component re-rendered")

//   // const data  = inputHandler("data")
//   const data: any = useMemo(() => {
//     inputHandler(name)
//   }, [name])

//   return (
//     <div>
//       <input
//         placeholder="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         placeholder="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <p>{data}</p>
//     </div>
//   )
// }

// export default App

// // ------------- useCallback ----------------------
// import { useCallback, useEffect, useState } from "react"

// const App = () => {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")

//   // component re-render -> re-create
//   // const myFunction = () => {
//   //   console.log("My function is running")
//   //   return "Hello"
//   // }

//   //  const myFunction = useCallback(() => {
//   //    console.log("My function is running")
//   //    return "Hello"
//   //  }, [email])

//   const myFunction = useCallback(() => {
//     console.log("My function is running")
//     return "Hello"
//   }, [])

//   useEffect(() => {
//     console.log("useEffect running")
//     myFunction()
//   }, [myFunction])

//   console.log("Component re-rendered")

//   return (
//     <div>
//       <input
//         placeholder="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         placeholder="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       {/* <p>{data}</p> */}
//     </div>
//   )
// }

// export default App

// ---------------- useReducer ---------------------------

// {
//     id: "",
//     name: "",
//     email: "",
//     age: 0
//   }
import { useReducer } from "react"

// {
//       id: action?.data,
//       name: state.name,
//       email: state.email,
//       age: state.age
//     }

const reducer = (state: any, action: any) => {
  switch (action?.type) {
    case "ID":
      return { ...state, id: action?.data }
    case "NAME":
      return { ...state, name: action?.data }
    case "EMAIL":
      return { ...state, email: action?.data }
    case "AGE":
      return { ...state, age: action?.data }
    default:
      return state
  }

  // if (action?.type === "ID") {
  //   return { ...state, id: action?.data }
  // } else if (action?.type === "NAME") {
  //   return { ...state, name: action?.data }
  // } else if (action?.type === "EMAIL") {
  //   return { ...state, email: action?.data }
  // } else if (action?.type === "AGE") {
  //   return { ...state, age: action?.data }
  // } else {
  //   return state
  // }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    id: "",
    name: "",
    email: "",
    age: 0
  })

  console.log(state)

  return (
    <div>
      <input
        placeholder="ID"
        value={state.id}
        onChange={(e) => {
          // action
          dispatch({ type: "ID", data: e.target.value })
        }}
      />
      <input
        placeholder="Name"
        value={state.name}
        onChange={(e) => {
          dispatch({ type: "NAME", data: e.target.value })
        }}
      />
      <input
        placeholder="Email"
        value={state.email}
        onChange={(e) => {
          dispatch({ type: "EMAIL", data: e.target.value })
        }}
      />
      <input
        type="number"
        placeholder="Age"
        value={state.age}
        onChange={(e) => {
          dispatch({ type: "AGE", data: e.target.value })
        }}
      />
    </div>
  )
}

export default App

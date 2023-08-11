'use client'

/* Core */
import { useState } from 'react'

/* Instruments */
import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
} from '@/lib/redux'
import styles from './counter.module.css'
import toast, { Toaster } from 'react-hot-toast';

export const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState(2)
  function cart() {
    // const cartcount = count

    toast.custom((t) => (
      <div
        className={`${t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://scontent.fisb9-1.fna.fbcdn.net/v/t39.30808-6/321773439_509591187671204_4746146816125786063_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cZEIQuq_7XIAX_1gG38&_nc_oc=AQkv3NL71Ul59ecaL77fA6PwbAZQvs7_jM-uKF2u_5gnIHIsF49jjaAfUiRAMUxdHHk&_nc_ht=scontent.fisb9-1.fna&oh=00_AfDMVz5KDtSL1takbzHO_oy1zKZb-900b1hj5_KEiYZxuQ&oe=64D77077"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Rana Rabees
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Yeah! Your Item Added In Cart
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            **Thanks**
          </button>
        </div>
      </div>
    ))
  }
  return (
    <div>
      <div className="flex justify-center">
        {/* <div className="p-3 lg:w-auto justify-center shadow-black hover:shadow-2xl md:w-auto w-[200px] rounded-full lg:flex md:flex flex bg-gray-300"> */}
        <span className="lg:absolute md:absolute top-1 right-20 h-20 w-20 text-center rounded-full bg-pink-400 text-black">
          <span className={styles.newvalue}>{count}</span>
          {/* <svg id="changeColor" fill="#DC7633" xmlns="http://www.w3.org/2000/svg" width="50" zoomAndPan="magnify" viewBox="0 0 375 374.9999" height="50" preserveAspectRatio="xMidYMid meet" version="1.0"><path id="pathAttribute" d="M 318.507812 170.167969 C 327.003906 152.878906 322.835938 131.699219 308.378906 118.964844 C 309.777344 99.183594 297.210938 80.492188 278.421875 74.242188 C 272.058594 55.488281 253.367188 42.789062 233.476562 44.316406 C 220.816406 29.855469 199.558594 25.726562 182.296875 34.273438 C 165.035156 25.792969 143.746094 29.820312 131.085938 44.316406 C 111.195312 42.789062 92.535156 55.492188 86.140625 74.210938 C 67.410156 80.59375 54.71875 99.148438 56.21875 118.964844 C 41.757812 131.664062 37.558594 152.914062 46.121094 170.167969 C 37.523438 187.429688 41.757812 208.609375 56.183594 221.339844 C 54.882812 238.800781 64.546875 255.160156 79.84375 263.433594 C 69.179688 281.722656 58.050781 299.777344 47.488281 318.167969 C 44.421875 321.625 45.085938 327.144531 49.453125 329.242188 C 62.015625 330.40625 74.644531 329.472656 87.207031 329.804688 C 93.601562 340.949219 98.664062 352.914062 106.296875 363.292969 C 110.492188 364.757812 113.59375 363.589844 115.660156 359.832031 C 126.324219 342.605469 136.214844 324.953125 146.613281 307.5625 C 158.40625 311.484375 170.972656 310.957031 182.363281 305.964844 C 193.722656 310.550781 206.289062 311.914062 218.046875 307.796875 C 228.445312 325.1875 238.371094 342.839844 249.070312 360.03125 C 250.601562 364.417969 257.699219 365.484375 259.867188 361.296875 C 266.429688 351.121094 271.460938 340.082031 277.628906 329.640625 C 290.085938 329.574219 302.617188 330.503906 315.078125 329.242188 C 319.609375 327.3125 319.976562 321.726562 317.113281 318.234375 C 306.515625 299.84375 295.457031 281.722656 284.722656 263.402344 C 300.085938 255.222656 309.648438 238.761719 308.414062 221.308594 C 322.875 208.609375 326.972656 187.394531 318.507812 170.167969 Z M 109.929688 343.703125 C 104.898438 334.925781 100.867188 325.515625 94.800781 317.402344 C 84.671875 315.4375 74.210938 316.800781 63.949219 316.503906 C 72.480469 302.003906 81.074219 287.542969 89.640625 273.046875 C 91.105469 275.207031 94.070312 279.460938 95.570312 281.589844 C 92.402344 286.542969 88.738281 291.269531 86.738281 296.851562 C 88.140625 300.839844 93.234375 304.898438 97.167969 301.640625 C 102.332031 296.488281 105.800781 287.007812 114.398438 293.226562 C 111.195312 298.644531 107.234375 303.734375 105.167969 309.753906 C 105.398438 315.070312 112.730469 319.332031 116.398438 314.339844 C 121.425781 308.289062 125.195312 301.308594 129.457031 294.691406 C 131.058594 295.953125 134.21875 298.449219 135.820312 299.675781 C 127.1875 314.34375 118.59375 329.042969 109.929688 343.703125 Z M 300.652344 316.507812 C 290.386719 316.773438 279.960938 315.542969 269.796875 317.339844 C 263.765625 325.519531 259.699219 334.929688 254.671875 343.710938 C 246.007812 329.046875 237.410156 314.347656 228.710938 299.71875 C 230.546875 298.320312 234.140625 295.53125 235.941406 294.132812 C 241.4375 299.71875 249.871094 315.480469 257.433594 303.378906 C 256.433594 300.683594 254.464844 295.265625 253.46875 292.570312 C 255.269531 291.738281 258.867188 290.074219 260.699219 289.242188 C 264.402344 294.195312 267.164062 300.183594 272.394531 303.808594 C 277.523438 303.875 280.390625 301.410156 281.023438 296.425781 C 278.121094 290.542969 274.261719 285.21875 270.660156 279.800781 C 271.726562 278.101562 273.859375 274.746094 274.921875 273.050781 C 283.523438 287.511719 292.121094 301.976562 300.652344 316.507812 Z M 300.652344 316.507812 " fill-opacity="1" fill-rule="nonzero"></path><g id="inner-icon" transform="translate(80,70)"> <svg xmlns="http://www.w3.org/2000/svg" width="199.8" height="199.8" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16" id="IconChangeColor" transform="scale(-1, 1)"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" id="mainIconPathAttribute"></path> <animateTransform href="#IconChangeColor" attributeType="xml" attributeName="transform" type="rotate" from="0" to="359" dur="2s" repeatCount="indefinite"></animateTransform></svg> </g></svg> */}
        </span>
        {/* </div> */}
      </div>
      
      {/* <div className="flex justify-center">
        <span className="lg:absolute md:absolute bottom-1 right-20 h-20 w-20 text-center rounded-full bg-pink-400 text-black">
          <span className={styles.newvalue}>{count}</span>
        </span>
      </div>
      <div className="flex justify-center">
        <span className="lg:absolute md:absolute top-1 left-20 h-20 w-20 text-center rounded-full bg-pink-400 text-black">
          <span className={styles.newvalue}>{count}</span>
        </span>
      </div>
      <div className="flex justify-center">
        <span className="lg:absolute md:absolute bottom-1 left-20 h-20 w-20 text-center rounded-full bg-pink-400 text-black">
          <span className={styles.newvalue}>{count}</span>
        </span>
      </div> */}

      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          +
        </button>
      </div>
      <div className='mb-16 flex justify-center'>
        <button
          className={styles.button}
          onWheel={() => dispatch(counterSlice.actions.increment())}
          onClick={cart}
        >Add To Cart</button>
        <Toaster />
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value ?? 0))}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(counterSlice.actions.incrementByAmount(incrementAmount))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementAmount))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOddAsync(incrementAmount))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import bg from '../images/bg.jpg'
import moon from '../images/moon.png'
import mountain from '../images/mountain.png'
import road from '../images/road.png'

export default function Home() {

    const [moonEfect, setMoon] = useState(0)
    const [bgEfect, setBgefect] = useState(0)
    const [chaoEfect, setChao] = useState(0)
    const [div, setDiv] = useState(0)



    useEffect(() => {
        window.addEventListener('scroll', () => {
            let v = window.scrollY
            let av = v * 1.7
            let a = v * 1.2
            setMoon(-v, -1)
            setBgefect(-av)
            setChao(-v)
            setDiv(-av)
        })
    }, [])

    return (
        <>
            <header>
                <h2 className='h1'>Logo</h2>
                <ul>
                    <li> <strong> <Link to='/register'>Register</Link>  </strong></li>
                    <li><strong> <Link to='/login'>Login</Link> </strong></li>
                </ul>
            </header>
            <section className='sect'>

                <img src={bg} alt='back' />
                <img src={moon} alt='moon' id='moon' style={{ transform: `translate(${moonEfect}px, ${moonEfect}px)` }} />
                <img src={mountain} alt='mountain' style={{ transform: `translateY(${bgEfect}px` }} />
                <img src={road} alt='road' style={{ transform: `translateY(${chaoEfect}px` }} id='road' />
                <h2 id='text'>Moon Ligth</h2>

            </section>
            <div className='div' style={{ transform: `translateY(${div}px)` }}>
                <h3>
                    Parallax Background Scrolling
                </h3>
                <p>
                    Lorem ipsum dolor sit amet. Id unde tempore sit dolores nostrum ut exercitationem galisum sed saepe beatae nam autem aspernatur rem quam quisquam ut numquam aliquam. Hic earum mollitia sed libero voluptatibus eos labore ullam id possimus dolor id dolorem Quis At pariatur reprehenderit aut neque modi?Est perspiciatis illo eum repellat debitis et nemo dolorem ut illum voluptatem aut repellat repellendus? Eum omnis recusandae At dolore autem in distinctio animi qui distinctio excepturi. Id enim tempore sed provident id corporis excepturi et necessitatibus consectetur sit sint aliquid qui aperiam assumenda ex recusandae odio.
                </p>
                <p>
                    Ea quia molestias vel dolorem eaque 33 perspiciatis deleniti et dolore nihil est itaque odit ea quis omnis ex aliquid ipsum. In veniam ullam et molestias sint ex rerum iusto ut dolores officiis non perspiciatis Quis id ullam exercitationem sit earum architecto. Et quia quam qui internos minus est adipisci dolorum eos officiis accusamus.perspiciatis deleniti et dolore nihil est itaque odit ea quis omnis ex aliquid ipsum. In veniam ullam et molestias sint ex rerum iusto ut dolores officiis non perspiciatis Quis id ullam exercitationem.
                </p>

                <p>
                    perspiciatis deleniti et dolore nihil est itaque odit ea quis omnis ex aliquid ipsum. In veniam ullam et molestias sint ex rerum iusto ut dolores officiis non perspiciatis Quis id ullam exercitationem perspiciatis deleniti et dolore nihil est itaque odit ea quis omnis ex aliquid ipsum. In veniam ullam et molestias sint ex rerum iusto ut dolores officiis non perspiciatis Quis id ullam exercitationem perspiciatis deleniti et dolore nihil est itaque odit ea quis omnis ex aliquid ipsum. In veniam ullam et molestias sint ex rerum iusto ut dolores officiis non perspiciatis Quis id ullam exercitationem
                </p>
            </div>

        </>
    )
}
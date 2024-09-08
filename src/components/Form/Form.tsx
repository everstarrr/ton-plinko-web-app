import { ChangeEvent, useEffect, useState } from 'react'
import './Form.css'
import { useTelegram } from '../../hooks/useTelegram'

const Form = () => {

    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('physical')
    const { tg } = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [country, street])


    const onChangeCountry = (e: ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e: ChangeEvent<HTMLInputElement>) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e: ChangeEvent<HTMLSelectElement>) => {
        setSubject(e.target.value)
    }

    return (
        <div className='form'>
            <h3>введи данные</h3>
            <input className='input' type='text' placeholder='страна' value={country} onChange={onChangeCountry} />
            <input className='input' type='text' placeholder='улица' value={street} onChange={onChangeStreet} />
            <select className='select' value={subject} onChange={onChangeSubject}>
                <option value={'physical'}>физ лицо</option>
                <option value={'legal'}>юр лицо</option>
            </select>
        </div>
    )
}

export default Form
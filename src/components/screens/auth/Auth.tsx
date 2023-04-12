import React, { useState } from 'react'
import { useAuthRedirect } from './useAuthRedirect'
import { useAuth } from '@/hooks/useAuth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthInput } from './auth.interface'
import styles from './Auth.module.scss'
import { Meta } from '@/utils/meta/Meta'
import { Heading } from '@/components/ui/heading/Heading'
import { data } from 'autoprefixer'
import { Button } from '@/components/ui/form-elements/Button'
import { AuthFields } from './AuthField'

export const Auth = () => {
  useAuthRedirect()

  const { isLoading } = useAuth()

  const [type, setType] = useState<'login' | 'register'>('login')
  
  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset
  } = useForm<IAuthInput>({
    mode: 'onChange'
  })
  
  const login = (data: any) => {}
  const register = (data: any) => {}

  const onSubmit: SubmitHandler<IAuthInput> = (data) => {
    if (type === 'login') login(data)
    else if (type === 'register') register(data)

    reset()
  }

  return (
    <Meta title='Auth'>
      <section className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading
            title='Auth'
            className={'mb-2'}
          />

          <AuthFields 
            formState={formState} 
            register={registerInput}  
            isPasswordRequired
          />

          <div className={styles.buttons}>
            <Button type='submit' onClick={() => setType('login')} disabled={isLoading}>Login</Button>
            <Button type='submit' onClick={() => setType('register')}>Register</Button>
          </div>
        </form>
      </section>
    </Meta>
  )
}

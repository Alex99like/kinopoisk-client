import {FC, useState} from "react";
import {useAuthRedirect} from "@/app/components/screens/auth/useAuthRedirect";
import {useAuth} from "@/app/hooks/useAuth";
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthInput} from "@/app/components/screens/auth/auth.interface";
import styles from './Auth.module.scss'
import {Meta} from "@/app/utils/meta";
import {Heading} from "@/app/components/ui/heading/Heading";
import {Button} from "@/app/components/ui/form-elements/Button";
import {AuthFields} from "@/app/components/screens/auth/AuthFields";
import {useActions} from "@/app/hooks/useActions";
// import {Button} from "react-query/types/devtools/styledComponents";

export const Auth: FC = () => {
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

  const { login, register } = useActions()

  const onSubmit: SubmitHandler<IAuthInput> = (data) => {
    if (type === 'login') login(data)
    else if (type === 'register') register(data)

    reset()
  }

  return (
    <Meta title={'Auth'}>
      <section className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading
            title={'Auth'}
            className={'mb-6'}
          />

          <AuthFields
            register={registerInput}
            formState={formState}
            isPasswordRequired
          />

          <div className={styles.buttons}>
            <Button
              type={'submit'}
              onClick={() => setType('login')}
              disabled={isLoading}
            >
              Login
            </Button>
            <Button
              type={'submit'}
              onClick={() => setType('register')}
              disabled={isLoading}
            >
              Register
            </Button>
          </div>
        </form>
      </section>
    </Meta>
  )
}
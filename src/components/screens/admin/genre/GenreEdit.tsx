import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'
import { Button } from '@/components/ui/form-elements/Button'
import { Field } from '@/components/ui/form-elements/Field'
import { Heading } from '@/components/ui/heading/Heading'
import { SkeletonLoader } from '@/components/ui/heading/SkeletonLoader'
import { Meta } from '@/utils/meta/Meta'
import generateSlug from '@/utils/string/generateSlug'
import React, { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { IGenreEditInput } from './genre-edit.interface'
import { useGenreEdit } from './useGenreEdit'
import formStyles from '@/components/shared/admin/adminForm.module.scss'
import dynamic from 'next/dynamic'
import { SlugField } from '@/components/ui/form-elements/SlugField/SlugField'
import { stripHtml } from 'string-strip-html'


const DynamicTextEditor = dynamic(
	() => import('@/components/ui/form-elements/TextEditor'),
	{
		ssr: false,
	}
)

export const GenreEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    setValue,
    getValues,
  } = useForm<IGenreEditInput>({
    mode: 'onChange',
  })

  const { isLoading, onSubmit } = useGenreEdit(setValue)

  return (
    <Meta title="Edit genre">
      <AdminNavigation />
      <Heading title="Edit genre" />
      <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
        {false ? (
          <SkeletonLoader count={3} />
        ) : (
          <>
            <div className={formStyles.fields}>
              <Field
                {...register('name', {
                  required: 'Name is required!',
                })}
                placeholder="Name"
                error={errors.name?.message}
                style={{ width: '31%' }}
              />

              <div style={{ width: '31%' }}>
                <SlugField
                  generate={() =>
                    setValue('slug', generateSlug(getValues('name')))
                  }
                  register={register}
                  error={errors.slug?.message}
                />
              </div>

              <Field
                {...register('icon', {
                  required: 'Icon is required!',
                })}
                placeholder="Icon"
                error={errors.icon?.message}
                style={{ width: '31%' }}
              />
            </div>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <DynamicTextEditor
                  placeholder="Description"
                  onChange={onChange}
                  error={error?.message}
                  value={value}
                />
              )}
              rules={{
                validate: {
                  required: (v) =>
                    (v && stripHtml(v).result.length > 0) ||
                    'Description is required!',
                },
              }}
            />
            <Button>Update</Button>
          </>
        )}
      </form>
    </Meta>
  )
}

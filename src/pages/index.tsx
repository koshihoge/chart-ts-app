import { AxisSelectBox } from '@/pages/components/axisSelectBox'
import {
  ClassificationSelectBox,
  CerealComboTypeParameterName,
} from '@/pages/components/classificationSelectBox'
import { CerealValueParameterName } from '@/parameters/cerealParameters'
import { getChartOptions } from '@/parameters/chartParameters'

import { Inter } from '@next/font/google'
import { cereals } from '@prisma/client'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Scatter } from 'react-chartjs-2'

import React, { useState } from 'react'

import 'chart.js/auto'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inter = Inter({ subsets: ['latin'] })

type Props = {
  cereals: cereals[]
}

const Home = (props: Props): JSX.Element => {
  const [xCerealParameter, setXCerealParameter] =
    useState<CerealValueParameterName>('calories')
  const [yCerealParameter, setYCerealParameter] =
    useState<CerealValueParameterName>('carbo')

  const [mfrCerealParameter, setMfrCerealParameter] =
    useState<CerealComboTypeParameterName>('未選択')
  const [typeCerealParameter, setTypeCerealParameter] =
    useState<CerealComboTypeParameterName>('未選択')

  const mfrs = new Set(props.cereals.map((element, _) => element.mfr))
  const types = new Set(props.cereals.map((element, _) => element.type))

  const cereals = props.cereals
    .filter((cereal: cereals) => {
      return (
        (mfrCerealParameter === '未選択' ||
          mfrCerealParameter === cereal.mfr) &&
        (typeCerealParameter === '未選択' ||
          typeCerealParameter === cereal.type)
      )
    })
    .map((cereal: cereals) => {
      return { x: cereal[xCerealParameter], y: cereal[yCerealParameter] }
    })

  const data = {
    datasets: [
      {
        label: '80 Cereals' + ` (${cereals.length} unique values)`,
        backgroundColor: 'rgb(255, 99, 132)',
        data: cereals,
      },
    ],
  }

  return (
    <>
      <Head>
        <title>chart-ts-app</title>
        <meta name="description" content="Chart.jsで散布図を表示するアプリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section style={{ padding: '10pt' }}>
          <h1>chart-ts-app</h1>
          <p>シリアルのデータ</p>
          <div style={{ width: '400pt' }}>
            <Scatter
              data={data}
              options={getChartOptions(xCerealParameter, yCerealParameter)}
              width={300}
              height={300}
            />
          </div>
          <AxisSelectBox
            xCerealParameter={xCerealParameter}
            setXCerealParameter={setXCerealParameter}
            yCerealParameter={yCerealParameter}
            setYCerealParameter={setYCerealParameter}
          />
          <ClassificationSelectBox
            mfrs={mfrs}
            types={types}
            mfrCerealParameter={mfrCerealParameter}
            setMfrCerealParameter={setMfrCerealParameter}
            typeCerealParameter={typeCerealParameter}
            setTypeCerealParameter={setTypeCerealParameter}
          />
        </section>
      </main>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async _context => {
  const response = await fetch('http://localhost:3000/api/cereals')
  const cereals: cereals[] = await response.json()
  return {
    props: { cereals },
  }
}

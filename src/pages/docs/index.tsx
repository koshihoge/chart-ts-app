import { API } from '@stoplight/elements'
import Head from 'next/head'

import React from 'react'

import type { NextPage } from 'next'
import '@stoplight/elements/styles.min.css'

const ApiDocuments: NextPage = () => {
  return (
    <div>
      <Head>
        <title>API Documents</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <API
        apiDescriptionUrl="/elements/cereals.yaml"
        basePath="/docs"
        router="memory"
      />
    </div>
  )
}

export default ApiDocuments

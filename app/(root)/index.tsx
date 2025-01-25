import {Redirect, Stack} from 'expo-router'
import React from 'react'

function Root () {
  return (
    <>
      <Stack.Screen options={{title: "Chat", headerShown: true, animationTypeForReplace: 'pop'}} />
      <Redirect href="/(root)/home" />
    </>
  )
}

export default Root
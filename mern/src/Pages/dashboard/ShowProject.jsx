import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useProyecto  from '../../hooks/useProyectos'


const ShowProject = () => {
  
  const params = useParams()
  const {getProject} = useProyecto()
  useEffect(() => {
    getProject(params.id)
  },[])
  

  return (
    <div>ShowProject</div>
  )
}

export default ShowProject
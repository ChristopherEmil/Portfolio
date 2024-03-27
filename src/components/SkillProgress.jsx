import React from 'react'
import {Flat, Heat, Nested} from '@alptugidin/react-circular-progress-bar'

const SkillProgress = ({title, percentage,}) => {
  return (
      <div className="item">
   <Flat
	progress={percentage}
	sx={{
		strokeColor: '#8b00cc',
		bgStrokeColor: '#000000',
		barWidth: 10,
		valueColor: '#ffffff',
		miniCircleColor: '#a600ff'
	}}

/>
                <h5>{title}</h5>
    </div>
  )
}

export default SkillProgress

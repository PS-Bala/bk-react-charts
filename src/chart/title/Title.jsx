import React from 'react'

function Title({ titleLeftPosition, title }) {
  return (
    <React.Fragment>
      {title != null && (
        <text
          id='charts_ChartTitle'
          x={titleLeftPosition}
          y='25'
          fill='#424242'
          fontSize='15px'
          fontStyle='Normal'
          fontFamily='Segoe UI'
          fontWeight='500'
          textAnchor='middle'
          label-rotation='undefined'
          transform=''
          opacity='1'
          dominantBaseline='auto'
          aria-label={title}
          tabIndex='1'
        >
          {title}
        </text>
      )}
    </React.Fragment>
  )
}

export default Title

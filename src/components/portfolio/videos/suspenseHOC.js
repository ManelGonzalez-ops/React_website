import React, {Suspense} from 'react'

 function suspenseHOC(props) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {props.children}
        </Suspense>
    )
}

export default React.memo(suspenseHOC)
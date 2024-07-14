import { useState, useCallback } from 'react'
import { ReactMediaRecorder } from 'react-media-recorder'

const useMediaRecorder = () => {
	const [isRecording, setIsRecording] = useState(false)

	const handleDataAvailable = useCallback(blobUrl => {
		console.log('handleDataAvailable', blobUrl)
		setMediaBlobUrl(blobUrl)
	}, [])

	const startRecording = () => {
		setIsRecording(true)
	}

	const stopRecording = () => {
		setIsRecording(false)
	}

	return {
		isRecording,
		mediaBlobUrl,
		startRecording,
		stopRecording,
		handleDataAvailable,
	}
}

export default useMediaRecorder

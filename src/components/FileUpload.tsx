import { create } from 'ipfs-core'

import { useState, useEffect } from 'react'

const FileUpload = () => {
  const [ipfs, setIpfs] = useState<any>(null)

  const [uri, setUri] = useState('');
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      const repoPath = `ipfs-${Math.random()}`
      setIpfs(await create({ repo: repoPath }))
    })()
  }, []);

  const captureFile = async (event: any) => {
    event.stopPropagation()
    event.preventDefault()

    const fileName = await saveToIpfsWithFilename(event.target.files);
    return fileName;
  }

  // Add file to IPFS and wrap it in a directory to keep the original filename
  const saveToIpfsWithFilename = async ([file]: [any]) => {
    const fileDetails = {
      path: file.name,
      content: file
    }

    const options = {
      wrapWithDirectory: true,
      progress: (prog: any) => console.log(`received: ${prog}`)
    }

    try {
      const added = await ipfs.add(fileDetails, options)

      setUri('https://ipfs.io/ipfs/' + added.cid.toString());
    } catch (err: any) {
      setError(err.message)
    }
  }

  

  if (!ipfs) {
    return <>Loading...</>
  }

  return (
    <>
      <div>
        <input
          className="input-reset bn black-80 bg-white pa3 w-100 mb3 ft"
          id="input-file"
          name="input-file"
          type="file"
          onChange={captureFile}
        />
        <label htmlFor="input-file" className="f5 ma0 pb2 aqua fw4 db">Input File</label>
      </div>

      {uri &&
        <div>
          <a id="gateway-link" target='_blank'
            href={uri} rel="noreferrer">
            {uri}
          </a>
        </div>
      }

      {error && (
        <div className="bg-red pa3 center mv3 white">
          Error: {(error as any).message || error}
        </div>
      )}
    </>
  )
}

export default FileUpload
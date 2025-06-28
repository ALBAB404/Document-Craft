
const page = () => {
  return (
    <div>
      <h1>Get Your API Key</h1>
      <p>This is the API key management page with some dummy content.</p>
      <div className="mt-4">
        <h2>API Key Information</h2>
        <p className="text-gray-600">Generate and manage your API keys for accessing our services.</p>
      </div>
      <div className="mt-6">
        <h3>Current API Keys</h3>
        <div className="bg-gray-100 p-4 rounded-lg mt-2">
          <code className="text-sm">sk-test-1234567890abcdef1234567890abcdef</code>
          <span className="ml-2 text-xs text-green-600">Active</span>
        </div>
      </div>
      <div className="mt-6">
        <h3>Generate New API Key</h3>
        <p className="text-sm text-gray-600 mb-4">Create a new API key for your applications.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Generate New Key
        </button>
      </div>
      <div className="mt-6">
        <h3>Usage Guidelines</h3>
        <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
          <li>Keep your API keys secure and never share them publicly</li>
          <li>Use different keys for development and production environments</li>
          <li>Regenerate keys regularly for enhanced security</li>
          <li>Monitor API usage through the dashboard</li>
        </ul>
      </div>
    </div>
  )
}

export default page

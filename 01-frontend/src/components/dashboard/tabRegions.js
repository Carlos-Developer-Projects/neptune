function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
//component  
export default function TabRegions({tabs, currentTab, setTabs}) {
    return (
      <div className="mt-3 mb-10">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            defaultValue={currentTab}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  id={tab.name}
                  onClick={(e)=>{setTabs(e.target.id)}}
                  className={classNames(
                    tab.name === currentTab
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'w-1/4 py-4 px-1 text-left border-b-2 font-medium text-sm'
                  )}
                  aria-current={currentTab}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    )
  }
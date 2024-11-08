import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'

function Section3() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-3">
                <h3 className=" text-pink-500 text-xl">
                    Section-3: Story Analysis
                </h3>
            </div>
            
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left Column - 4 columns wide */}
                <div className="md:col-span-4 text-center md:text-right">
                <br /><br /><br />
                    <label className="block mb-2 text-gray-700  text-xl">
                        Characters and their roles
                        <ChevronDoubleDownIcon className="inline md:hidden w-5 h-5 ml-1" />
                    </label>
                </div>

                {/* Middle Column - 1 column wide */}
                <div className="hidden md:flex md:col-span-1"></div>

                {/* Right Column - 7 columns wide */}
                <div className="md:col-span-7">
                    <div className="w-full md:w-full bg-gray-200 rounded-md overflow-hidden">                       
                        <div className="max-h-[400px] overflow-y-auto">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse bg-white border-2 border-gray-800 rounded-lg">
                                    <thead className="sticky top-0 bg-white">
                                        <tr className="border-b-2 border-gray-800">
                                            <th className="text-left p-3 border-r border-gray-800 min-w-[150px]">Character Name</th>
                                            <th className="text-left p-3 border-r border-gray-800 min-w-[200px]">Role in the story</th>                                    
                                        </tr>
                                    </thead>
                                    {/* <tbody>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Sarah Connor</td>
                                            <td className="p-3 border-r border-gray-800">Strong female protagonist</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Tony Stark</td>
                                            <td className="p-3 border-r border-gray-800">Genius billionaire playboy philanthropist</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">John Wick</td>
                                            <td className="p-3 border-r border-gray-800">Legendary assassin with a love for dogs</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Ellen Ripley</td>
                                            <td className="p-3 border-r border-gray-800">Space warrant officer and xenomorph survivor</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Indiana Jones</td>
                                            <td className="p-3 border-r border-gray-800">Adventurous archaeologist with a fear of snakes</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Princess Leia</td>
                                            <td className="p-3 border-r border-gray-800">Rebel leader and force-sensitive diplomat</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">James Bond</td>
                                            <td className="p-3 border-r border-gray-800">Sophisticated spy with a license to kill</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Katniss Everdeen</td>
                                            <td className="p-3 border-r border-gray-800">Skilled archer and symbol of rebellion</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Bruce Wayne</td>
                                            <td className="p-3 border-r border-gray-800">Billionaire vigilante with a dark past</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Wonder Woman</td>
                                            <td className="p-3 border-r border-gray-800">Amazonian warrior princess and diplomat</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Luke Skywalker</td>
                                            <td className="p-3 border-r border-gray-800">Farm boy turned Jedi Master</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Black Widow</td>
                                            <td className="p-3 border-r border-gray-800">Former Russian spy and skilled assassin</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Doctor Strange</td>
                                            <td className="p-3 border-r border-gray-800">Arrogant surgeon turned master of mystic arts</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Hermione Granger</td>
                                            <td className="p-3 border-r border-gray-800">Brilliant witch and voice of reason</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Peter Parker</td>
                                            <td className="p-3 border-r border-gray-800">Friendly neighborhood Spider-Man</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Captain Jack Sparrow</td>
                                            <td className="p-3 border-r border-gray-800">Eccentric pirate captain with questionable morals</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Rey Skywalker</td>
                                            <td className="p-3 border-r border-gray-800">Force-sensitive scavenger turned Jedi</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Thor Odinson</td>
                                            <td className="p-3 border-r border-gray-800">God of Thunder with a mighty hammer</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Lara Croft</td>
                                            <td className="p-3 border-r border-gray-800">Adventurous archaeologist and tomb raider</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Neo</td>
                                            <td className="p-3 border-r border-gray-800">The One who freed humanity from the Matrix</td>                                    
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="p-3 border-r border-gray-800">Princess Mononoke</td>
                                            <td className="p-3 border-r border-gray-800">Wolf-raised warrior and nature protector</td>                                    
                                        </tr>
                                    </tbody> */}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
        </div>
    )
}

export default Section3
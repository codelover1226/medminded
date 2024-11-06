"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import IconLogo from '@/components/icon/icon-logo';
import IconBook4 from '@/components/icon/home/icon-book4';
import Dropdown from '@/components/dropdown';
import IconUser from '@/components/icon/header/icon-profile';
import IconSetting from '@/components/icon/header/icon-setting';
import IconLogout from '@/components/icon/header/icon-logout';
import Image from 'next/image';
import QuestionInput from '@/components/home/question-input2';
import PdfViewer from '@/components/PdfViewer';
const Answer = () => { 
    const pdfUrl = 'example.pdf';
    const [responseLength, setResponseLength] = useState<string>('standard');
    const [mode, setMode] = useState<string>('standard');

    const onEnter = () => {

    }
    return (
        <div>
            <div className='grid grid-cols-2 gap-2 h-[100vh] bg-[#F0EFED]'>
                <div className=' h-[100vh] bg-[#FBFAF8]'>
                    <div className='flex justify-between items-center p-[30px]'>
                        <div>
                            <div className='text-base px-4 bg-[#F0EFED] hover:bg-[#ECF1FF] cursor-pointer flex items-center  gap-1 p-1 rounded-md'>
                                <IconBook4 /> New Conversation
                            </div>
                        </div>
                        <div>
                            <Link href="/" className="main-logo flex shrink-0 items-center">
                                <IconLogo fill={"#636262"} />
                            </Link>
                        </div>
                        <div>
                            <div className="horizontal-logo dropdown flex  pr-4">
                                <Dropdown
                                    offset={[0, 8]}
                                    placement={`bottom-end`}
                                    btnClassName="relative group block"
                                    button={<div className="h-9 w-9 bg-white-light/40 p-2 hover:bg-white-light/90 dark:bg-dark/40 dark:hover:bg-dark/60 rounded-full object-cover saturate-50 group-hover:saturate-100"><Image src="/assets/images/menu.png" alt="menu" width="50" height="50" /></div>}
                                >
                                    <ul className="w-[150px] !py-0 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">

                                        <li>
                                            <Link href="/users/profile" className="dark:hover:text-white">
                                                <IconUser className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" fill={"black"} />
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/apps/mailbox" className="dark:hover:text-white">
                                                <IconSetting className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" fill={"black"} />
                                                Setting
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/auth/boxed-lockscreen" className="dark:hover:text-white">
                                                <IconLogout className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" fill={"black"} />
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    {/* content view */}
                    <div className='p-[30px] text-[#636262]'>
                        <div className='flex items-center gap-3'>
                            <div className='rounded-full bg-[#F0EFED] p-3'>RA</div>
                            <div><p className='bg-[#F0EFED] rounded-md p-[10px] text-[14px]'>What are the indications of RSV vaccine in infants to prevent bronchiolitis?</p></div>
                        </div>
                        <div className='py-3'>
                            <div className='flex items-center gap-3'>
                                <div className='rounded-full ]'><Image src={"/assets/images/mark.png"} alt='mark' width={42} height={42} /></div>
                                <div><p className='bg-[#F0EFED] rounded-md p-[10px] text-[18px]'>Indications of RSV Vaccine in Infants to Prevent Bronchiolitis</p></div>
                            </div>
                            <div className='pl-[50px] max-h-[55vh] overflow-y-scroll my-[10px]'>
                                <h1 className='text-[16px] my-[15px]'>Overview of RSV and Risk Factors</h1>

                                <p className='my-[10px]'>
                                    Respiratory Syncytial Virus (RSV) is a significant cause of bronchiolitis and pneumonia in infants, especially affecting those in their first year of life. Approximately 20% to 30% of infants infected with RSV develop lower respiratory tract diseases such as bronchiolitis. Signs typically include rhinitis, cough, and increased respiratory effort, which can progress to more severe symptoms like wheezing and retractions         .
                                </p>
                                <p className='my-[10px]'>
                                    The highest rates of RSV hospitalizations occur in infants under six months of age, with certain risk factors increasing the likelihood of severe disease:
                                </p>
                                <ul className='list-disc pl-[20px]'>
                                    <li>Prematurity (especially those born before 29 weeks of gestation)</li>
                                    <li>Chronic lung disease of prematurity</li>
                                    <li>Anatomic pulmonary abnormalities</li>
                                    <li>Neuromuscular disorders</li>
                                    <li>Neuromuscular disorders</li>
                                </ul>

                                <h1 className='text-[16px] my-[15px]'>Indications for RSV Immunoprophylaxis</h1>

                                <p className='my-[10px]'>Immunoprophylaxis using palivizumab is recommended for specific high-risk infant populations to prevent RSV-related hospitalizations. The following groups are advised to receive this prophylaxis:
                                </p>
                                <ul className='pl-[10px]'>
                                    <li><span className='font-bold'>1. Premature Infants:</span> Infants born before 29 weeks of gestation are highly encouraged to receive prophylaxis during their first RSV season.</li>
                                    <li><span className='font-bold'>2. Infants with Chronic Lung Disease:</span> Those with a history of chronic lung disease of prematurity should receive prophylaxis.</li>
                                    <li><span className='font-bold'>3. Congenital Heart Disease (CHD):</span> Infants with certain heart conditions may qualify for prophylaxis based on their medical history.</li>
                                    <li><span className='font-bold'>4. Neuromuscular Disorders:</span> Infants with conditions that impair cough or secretion clearance may be considered for prophylaxis.</li>
                                    <li><span className='font-bold'>5. Immunocompromised Children:</span> Children undergoing treatments or with conditions that weaken their immune systems may be eligible.</li>
                                    <li><span className='font-bold'>6. Infants with Specific Anatomical Issues:</span> Those with pulmonary abnormalities may require prophylaxis during RSV season.</li>
                                </ul>
                                <h1 className='text-[16px] my-[10px]'> Special Considerations</h1>
                            </div>
                            <div>
                                <QuestionInput
                                    responseLength={responseLength} setResponseLength={setResponseLength}
                                    mode={mode} setMode={setMode} onEnter={onEnter}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' h-[100vh] bg-[#FBFAF8] flex text-[#636262]'>
                    <div className=' h-[100vh] flex-grow'>
                        
                        <div className=' h-full flex '>
                            <div className='h-full overflow-scroll'>
                                <PdfViewer pdfUrl={pdfUrl}/>
                            </div>
                        </div>
                    </div>
                    <div className='h-[100vh] bg-[#F0EFED] w-[100px] p-[10px] pt-[30px]'>
                        <div className='cursor-pointer flex flex-row-reverse'><Image src={'/assets/images/edit.png'} alt='pan_tool' width={24} height={24}/></div>
                        <p className='text-center text-[15px]'>References</p>
                        <div className='flex flex-col items-center mt-[200px]'>
                            <div className='cursor-pointer'>
                                <div className='bg-[#D9D9D9] w-[60px] h-[60px] rounded-md'></div>
                                <p>Doc1</p>
                            </div>
                            <div className='cursor-pointer'>
                                <div className='bg-[#D9D9D9] w-[60px] h-[60px] rounded-md'></div>
                                <p>Doc2</p>
                            </div>
                            <div className='cursor-pointer'>
                                <div className='bg-[#D9D9D9] w-[60px] h-[60px] rounded-md'></div>
                                <p>Doc3</p>
                            </div>
                            <div className='cursor-pointer'>
                                <div className='bg-[#D9D9D9] w-[60px] h-[60px] rounded-md'></div>
                                <p>Doc4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Answer;

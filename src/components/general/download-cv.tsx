'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/Mahmoud_Abdallah_Frontend_Software_Engineer_Resume_2024.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;

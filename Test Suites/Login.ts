<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Login</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>41ca8710-9418-4182-993a-2e1020a5593c</testSuiteGuid>
   <testCaseLink>
      <guid>5762fe92-ebec-4222-9c60-111092eaf757</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>71608ef9-abcd-4c4e-bd48-63e77e610fe6</id>
         <masked>false</masked>
         <name>fieldEmail</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/Login/TC01-Login</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>b4ba55f1-fdc6-4c36-a6a7-e3742d6a2807</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Login</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>b4ba55f1-fdc6-4c36-a6a7-e3742d6a2807</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username_Valid</value>
         <variableId>71608ef9-abcd-4c4e-bd48-63e77e610fe6</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>2529479b-5592-41a3-8799-c9b6fd9f01ae</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login/TC02-Login - Data Invalid</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>7ade360c-b136-42bd-9f17-1f6faaeae1fd</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>1f057172-33cd-4817-81f4-22756887c4c2</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login/TC02_02-Login - Data Format Email InValid</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>901f4782-600f-45e9-9a79-ef00018740d3</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login/TC03-Login - Data email empty</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>618dd835-f1c6-4d3f-8c5f-b659549f5905</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login/TC04-Login - Data password empty</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>c34562e9-d64b-4d33-95f3-4e0dc480b4ec</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login/TC05-Login - Data email and pass empty</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
</TestSuiteEntity>

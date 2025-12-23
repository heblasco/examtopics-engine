# Exam Topics Questions

@thatonecodes

## Exam GH-200 topic 1 question 2 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 2
Topic #: 1

[All GH-200 Questions]

As a developer, you are designing a workflow and need to communicate with the runner machine to set environment variables, output values used by other actions, add debug messages to the output logs, and other tasks. Which of the following options should you use? 
Suggested Answer: E 🗳️ 

A. composite run step

B. enable debug logging

C. self-hosted runners

D. environment variables

E. workflow commands

**Answer: E**

**Timestamp: Sept. 19, 2025, 2:32 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312764-exam-gh-200-topic-1-question-2-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 3 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 3
Topic #: 1

[All GH-200 Questions]

When should you use the GITHUB_TOKEN in a workflow? 
Suggested Answer: A 🗳️ 

A. when you want to make authenticated calls to the GitHub API

B. when you want to connect to the runner via SSH

C. when you want to access repository-level secrets

D. when you want to call an action from the marketplace

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:32 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312770-exam-gh-200-topic-1-question-3-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 4 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 4
Topic #: 1

[All GH-200 Questions]

In which of the following scenarios should you use self-hosted runners? (Each correct answer presents a complete solution. Choose two.) 
Suggested Answer: BC 🗳️ 

A. when the workflow jobs must be run on Windows 10

B. when jobs must run for longer than 6 hours

C. when a workflow job needs to install software from the local network

D. when GitHub Actions minutes must be used for the workflow runs

E. when you want to use macOS runners

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:31 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312760-exam-gh-200-topic-1-question-4-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 5 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 5
Topic #: 1

[All GH-200 Questions]

As a developer, you need to leverage Redis in your workflow. What is the best way to use Redis on a self-hosted Linux runner without affecting future workflow runs? 
Suggested Answer: C 🗳️ 

A. Install Redis on the hosted runner image and place it in a runner group. Specify label: in your job to target the runner group.

B. Set up Redis on a separate machine and reference that instance from your job.

C. Specify container: and services: in your job definition to leverage a Redis service container.

D. Add a run step to your workflow, which dynamically installs and configures Redis as part of your job.

**Answer: C**

**Timestamp: Sept. 19, 2025, 2:32 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312768-exam-gh-200-topic-1-question-5-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 6 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 6
Topic #: 1

[All GH-200 Questions]

You installed specific software on a Linux self-hosted runner. You have users with workflows that need to be able to select the runner based on the identified custom software. Which steps should you perform to prepare the runner and your users to run these workflows? (Each correct answer presents part of the solution. Choose two.) 
Suggested Answer: CF 🗳️ 

A. Configure the webhook and network to enable GitHub to trigger workflow.

B. Create the group custom-software-on-linux and move the runner into the group.

C. Inform users to identify the runner with the labels custom-software and linux.

D. Add the label linux to the runner.

E. Inform users to identify the runner based on the group.

F. Add the label custom-software to the runner.

**Answer: C**

**Timestamp: Sept. 19, 2025, 2:31 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312761-exam-gh-200-topic-1-question-6-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 7 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 7
Topic #: 1

[All GH-200 Questions]

You need to trigger a workflow using the GitHub API for activity that happens outside of GitHub. Which workflow event do you use? 
Suggested Answer: D 🗳️ 

A. workflow_run

B. deployment

C. check_suite

D. repository_dispatch

**Answer: D**

**Timestamp: Sept. 19, 2025, 2:31 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312757-exam-gh-200-topic-1-question-7-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 8 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 8
Topic #: 1

[All GH-200 Questions]

In which locations can actions be referenced by workflows? (Each correct answer presents a complete solution. Choose three.) 
Suggested Answer: BCF 🗳️ 

A. an .action extension file in the repository

B. a published Docker container image on Docker Hub

C. a public NPM registry

D. the runs-on: keyword of a workflow file

E. the repository’s Secrets settings page

F. a separate public repository

G. the same repository as the workflow

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:32 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312762-exam-gh-200-topic-1-question-8-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 9 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 9
Topic #: 1

[All GH-200 Questions]

Scheduled workflows run on the: 
Suggested Answer: E 🗳️ 

A. specified commit and branch from the workflow YAML file.

B. latest commit from the branch named schedule.

C. latest commit and branch on which the workflow was triggered.

D. latest commit from the branch named main.

E. latest commit on the default or base branch.

**Answer: E**

**Timestamp: Sept. 19, 2025, 2:31 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312758-exam-gh-200-topic-1-question-9-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 10 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 10
Topic #: 1

[All GH-200 Questions]

Custom environment variables can be defined at multiple levels within a workflow file including: (Each answer presents a complete solution. Choose three.) 
Suggested Answer: ABE 🗳️ 

A. top level.

B. step level.

C. default level.

D. runner level.

E. job level.

F. stage level.

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:32 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312772-exam-gh-200-topic-1-question-10-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 11 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 11
Topic #: 1

[All GH-200 Questions]

You are a DevOps engineer working on deployment workflows. You need to execute the deploy job only if the current branch name is feature-branch. Which code snippet will help you to implement the conditional execution of the job? 
Suggested Answer: A 🗳️ 

A. jobs:deploy:if: github.ref_name == 'feature-branch'runs-on: ubuntu-lateststeps:- uses: actions/checkout@v3

B. jobs:deploy:if: github.branch.name == 'feature-branch'runs-on: ubuntu-lateststeps:- uses: actions/checkout@v3

C. jobs:deploy:if: github.ref.name == 'feature-branch'runs-on: ubuntu-lateststeps:- uses: actions/checkout@v3

D. jobs:deploy:if: github.branch_name == 'feature-branch'runs-on: ubuntu-lateststeps:- uses: actions/checkout@v3

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:32 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312767-exam-gh-200-topic-1-question-11-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 12 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 12
Topic #: 1

[All GH-200 Questions]

What are the mandatory requirements for publishing GitHub Actions to the GitHub Marketplace? (Each correct answer presents part of the solution. Choose two.) 
Suggested Answer: BC 🗳️ 

A. The action can be either in a public or private repository.

B. The action’s metadata file must be in the root directory of the repository.

C. The action’s name cannot match a user or organization on GitHub unless the user or organization owner is publishing the action.

D. The name should match with one of the existing GitHub Marketplace categories.

E. Each repository can contain a collection of actions as long as they are under the same Marketplace category.

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:33 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312773-exam-gh-200-topic-1-question-12-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 13 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 13
Topic #: 1

[All GH-200 Questions]

Which of the following is the proper syntax to specify a custom environment variable named MY_VARIABLE with the value my-value? 
Suggested Answer: F 🗳️ 

A. var:MY_VARIABLE = my-value

B. environment:MY_VARIABLE = my-value

C. var:MY_VARIABLE: my-value

D. env:MY_VARIABLE = my-value

E. environment:MY_VARIABLE: my-value

F. env:MY_VARIABLE: my-value

**Answer: F**

**Timestamp: Sept. 19, 2025, 2:32 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312766-exam-gh-200-topic-1-question-13-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 14 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 14
Topic #: 1

[All GH-200 Questions]

As a DevOps engineer, you need to define a deployment workflow that runs after the build workflow has successfully completed. Without modifying the build workflow, which trigger should you define in the deployment workflow? 
Suggested Answer: D 🗳️ 

A. repository_dispatch

B. workflow_dispatch

C. workflow_exec

D. workflow_run

**Answer: D**

**Timestamp: Sept. 19, 2025, 2:32 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312769-exam-gh-200-topic-1-question-14-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 15 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 15
Topic #: 1

[All GH-200 Questions]

Which step is using the dbserver environment variable correctly? 
Suggested Answer: D 🗳️ 

A. steps:- name: Hello worldrun: echo $dbservervariables:dbserver: orgserver1

B. steps:- name: Hello worldrun: echo $dbserverenv:- name: dbservervalue: orgserver1

C. steps:- name: Hello worldrun: echo $dbserverenvironment:dbserver: orgserver1

D. steps:- name: Hello worldrun: echo $dbserverenv:dbserver: orgserver1

**Answer: D**

**Timestamp: Sept. 19, 2025, 2:32 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312763-exam-gh-200-topic-1-question-15-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 16 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 16
Topic #: 1

[All GH-200 Questions]

In which scenarios could the GITHUB_TOKEN be used? (Each correct answer presents a complete solution. Choose two.) 
Suggested Answer: DE 🗳️ 

A. to create a repository secret

B. to add a member to an organization

C. to read from the file system on the runner

D. to publish to GitHub Packages

E. to create issues in the repo

F. to leverage a self-hosted runner

**Answer: D**

**Timestamp: Sept. 19, 2025, 2:31 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312759-exam-gh-200-topic-1-question-16-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 17 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 17
Topic #: 1

[All GH-200 Questions]

As a developer, which of the following snippets will enable you to run the commands npm ci and npm run build as part of a workflow? 
Suggested Answer: A 🗳️ 

A. - run: |npm cinpm run build

B. - shell:npm cinpm run build

C. - run: |npm cinpm run buildshell: nodejs

D. - run:npm cinpm run buildE.- shell: |npm cinpm run build

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:33 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312774-exam-gh-200-topic-1-question-17-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 18 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 18
Topic #: 1

[All GH-200 Questions]

What is the smallest scope for an environment variable? 
Suggested Answer: D 🗳️ 

A. the workflow settings

B. the workflow env mapping

C. a job

D. a step

**Answer: D**

**Timestamp: Sept. 19, 2025, 2:32 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312771-exam-gh-200-topic-1-question-18-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 20 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 20
Topic #: 1

[All GH-200 Questions]

Where should workflow files be stored to be triggered by events in a repository? 
Suggested Answer: B 🗳️ 

A. anywhere

B. Nowhere; they must be attached to an action in the GitHub user interface.

C. .github/workflows/

D. .workflows/

E. .github/actions/

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:35 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312801-exam-gh-200-topic-1-question-20-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 21 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 21
Topic #: 1

[All GH-200 Questions]

Your organization is managing secrets using GitHub encrypted secrets, including a secret named SuperSecret. As a developer, you need to create a version of that secret that contains a different value for use in a workflow that is scoped to a specific repository named MyRepo. How should you store the secret to access your specific version within your workflow? 
Suggested Answer: D 🗳️ 

A. Create MyRepo_SuperSecret in GitHub encrypted secrets to specify the scope to MyRepo.

B. Create a duplicate entry for SuperSecret in the encrypted secret store and specify MyRepo as the scope.

C. Create a file with the SuperSecret information in the .github/secrets folder in MyRepo.

D. Create and access SuperSecret from the secrets store in MyRepo.

**Answer: D**

**Timestamp: Sept. 19, 2025, 2:42 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312820-exam-gh-200-topic-1-question-21-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 22 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 22
Topic #: 1

[All GH-200 Questions]

As a developer, one of your workflows will require XCode version 11.2 hosted on macOS Catalina (i.e., v10.15). You’ve already created and configured a self-hosted runner to conform to those requirements and registered it with your organization. What else should you do to ensure that the workflow accesses the correct runner instance? (Each answer presents a complete solution. Choose three.) 
Suggested Answer: CEF 🗳️ 

A. Add your runner to the appropriate runner groups.

B. In the workflow, specify:runs-on: [ ${{groups.macos-10.15}}, ${{groups.xcode-11.2}} ].

C. Create custom runner labels for macos-10.15 and xcode-11.2.

D. Create runner groups named macos-10.15 and xcode-11.2.

E. In the workflow, specify:runs-on: [self-hosted, macos-10.15, xcode-11.2].

F. Assign the custom labels to the self-hosted runner.

**Answer: C**

**Timestamp: Sept. 19, 2025, 2:35 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312795-exam-gh-200-topic-1-question-22-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 23 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 23
Topic #: 1

[All GH-200 Questions]

Which default GitHub environment variable indicates the owner and repository name? 
Suggested Answer: A 🗳️ 

A. GITHUB_REPOSITORY

B. GITHUB_WORKFLOW_REPO

C. ENV_REPOSITORY

D. REPOSITORY_NAME

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:35 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312796-exam-gh-200-topic-1-question-23-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 24 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 24
Topic #: 1

[All GH-200 Questions]

You are a DevOps engineer in ABC Corp. You need to schedule your deployment workflow twice a week at 7:45 UTC every Wednesday and Saturday. What is the appropriate YAML structure? 
Suggested Answer: C 🗳️ 

A. on:cron: '45 7 * * 3,6'

B. on:cron:- schedule: '45 7 * * 3,6'

C. on:schedule:- cron: '45 7 * * 3,6'

D. on:schedule: '45 7 * * 3,6'

**Answer: C**

**Timestamp: Sept. 19, 2025, 2:37 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312816-exam-gh-200-topic-1-question-24-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 25 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 25
Topic #: 1

[All GH-200 Questions]

You need to create new workflows to deploy to an unfamiliar cloud provider. What is the fastest and safest way to begin? 
Suggested Answer: B 🗳️ 

A. Create a custom action to wrap the cloud provider's CLI.

B. Search GitHub Marketplace for verified actions published by the cloud provider.

C. Use the actions/jenkins-plugin action to utilize an existing Jenkins plugin for the cloud provider.

D. Search GitHub Marketplace for actions created by GitHub.

E. Download the CLI for the cloud provider and review the associated documentation.

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:33 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312776-exam-gh-200-topic-1-question-25-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 26 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 26
Topic #: 1

[All GH-200 Questions]

Which scopes are available to define custom environment variables within a workflow file? (Choose three.) 
Suggested Answer: AEF 🗳️ 

A. the entire workflow, by using env at the top level of the workflow file

B. all jobs being run on a single Actions runner, by using runner.env at the top of the workflow file

C. the entire stage, by using env at the top of the defined build stage

D. within the run attribute of a job step

E. the contents of a job within a workflow, by using jobs.env

F. a specific step within a job, by using jobs..steps[*].env

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:34 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312788-exam-gh-200-topic-1-question-26-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 27 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 27
Topic #: 1

[All GH-200 Questions]

Which of the following commands will set the $FOO environment variable within a script, so that it may be used in subsequent workflow job steps? 
Suggested Answer: B 🗳️ 

A. run: echo "::set-env name=FOO::bar"

B. run: echo "FOO=bar" >> $GITHUB_ENV

C. run: echo ${{ $FOO=bar }}

D. run: export FOO=bar

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:43 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312824-exam-gh-200-topic-1-question-27-discussion/)

----------------------------------------

## Exam GH-200 topic 1 question 28 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 28
Topic #: 1

[All GH-200 Questions]

Which of the following scenarios requires a developer to explicitly use the GITHUB_TOKEN or github.token secret within a workflow? (Choose two.) 
Suggested Answer: AB 🗳️ 

A. passing the GITHUB_TOKEN secret to an action that requires a token as an input

B. making an authenticated GitHub API request

C. checking out source code with the actions/checkout@v3 action

D. assigning non-default permissions to the GITHUB_TOKEN

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:37 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312819-exam-gh-200-topic-1-question-28-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 1 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 1
Topic #: 2

[All GH-200 Questions]

By default, which workflows can use an action stored in internal repository? (Each answer presents a complete solution. Choose two.) 
Suggested Answer: BD 🗳️ 

A. selected public repositories outside of the enterprise

B. internal repositories owned by the same organization as the enterprise

C. public repositories owned by the same organization as the enterprise

D. private repositories owned by an organization of the enterprise

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:36 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312810-exam-gh-200-topic-2-question-1-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 2 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 2
Topic #: 2

[All GH-200 Questions]

Which default environment variable specifies the branch or tag that triggered a workflow? 
Suggested Answer: A 🗳️ 

A. GITHUB_REF

B. GITHUB_BRANCH

C. ENV_BRANCH

D. GITHUB_TAG

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:34 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312791-exam-gh-200-topic-2-question-2-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 3 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 3
Topic #: 2

[All GH-200 Questions]

As a developer, you need to add the correct syntax to allow the following workflow file to be triggered by multiple types of events. Which two code blocks should you add starting at line 5? (Each correct answer presents a complete solution. Choose two.) 
Suggested Answer: AC 🗳️ 

A. on: [push, pull_request]

B. on:branches:- 'main'- 'dev'

C. on:schedule:- cron: '*/15 * * * *'initiate:- 'main'

D. on: [push, commit]

E. on:push:branches:- mainrelease:types:- created

F. on:env:- 'prod'- 'qa'- 'test'

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:44 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312837-exam-gh-200-topic-2-question-3-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 4 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 4
Topic #: 2

[All GH-200 Questions]

You need to make a script to retrieve workflow run logs via the API. Which is the correct API to download a workflow run log? 
Suggested Answer: B 🗳️ 

A. POST /repos/:owner/:repo/actions/runs/:run_id/logs

B. GET /repos/:owner/:repo/actions/runs/:run_id/logs

C. POST /repos/:owner/:repo/actions/runs/:run_id

D. GET /repos/:owner/:repo/actions/artifacts/logs

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:44 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312834-exam-gh-200-topic-2-question-4-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 5 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 5
Topic #: 2

[All GH-200 Questions]

You are reaching your organization’s storage limit for GitHub artifacts and packages. What should you do to prevent the storage limit from being reached? (Each correct answer presents a complete solution. Choose two.) 
Suggested Answer: CE 🗳️ 

A. Use self-hosted runners for all workflow runs.

B. Delete artifacts from the repositories manually.

C. Configure the artifact and log retention period.

D. Disable branch protections in the repository.

E. Configure the repo to use Git Large File Storage.

**Answer: C**

**Timestamp: Sept. 19, 2025, 2:35 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312802-exam-gh-200-topic-2-question-5-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 6 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 6
Topic #: 2

[All GH-200 Questions]

While awaiting approval, how many days can a workflow be in the “Waiting” state before it automatically fails? 
Suggested Answer: A 🗳️ 

A. 30 days

B. 60 days

C. 14 days

D. 7 days

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:36 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312807-exam-gh-200-topic-2-question-6-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 7 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 7
Topic #: 2

[All GH-200 Questions]

What is the proper syntax to reference the system-provided run number variable? 
Suggested Answer: D 🗳️ 

A. ${{var.GITHUB_RUN_NUMBER}}

B. ${{env.GITHUB_RUN_NUMBER}}

C. $GITHUB_RUN_NUMBER

D. ${{GITHUB_RUN_NUMBER}}

E. $github.run_number

**Answer: D**

**Timestamp: Sept. 19, 2025, 2:43 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312823-exam-gh-200-topic-2-question-7-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 8 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 8
Topic #: 2

[All GH-200 Questions]

How can a workflow deploy mitigate the risk of multiple workflow runs that are deploying to a single cloud environment simultaneously? (Each correct answer presents part of the solution. Choose two.) 
Suggested Answer: CD 🗳️ 

A. Reference the mutex in the task performing the deployment.

B. Set the concurrency in the deploymentjob to 1.

C. Specify a target environment in the deploymentjob.

D. Specify a concurrency scope in the workflow.

E. Configure the mutex setting in the environment.

F. Pass the mutex into the deployment job.

**Answer: C**

**Timestamp: Sept. 19, 2025, 2:44 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312839-exam-gh-200-topic-2-question-8-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 9 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 9
Topic #: 2

[All GH-200 Questions]

Which default GitHub environment variable indicates the name of the person or app that initiated a workflow? 
Suggested Answer: A 🗳️ 

A. GITHUB_ACTOR

B. GITHUB USER

C. ENV_ACTOR

D. GITHUB_WORKFLOW_ACTOR

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:43 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312830-exam-gh-200-topic-2-question-9-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 10 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 10
Topic #: 2

[All GH-200 Questions]

As a developer, you are configuring GitHub Actions to deploy VMs to production. A member of the VMOps team must provide approval before the deployment occurs. Which of the following steps should you take? (Each correct answer presents part of the solution. Choose two.) 
Suggested Answer: BC 🗳️ 

A. Navigate to the organization settings and create a Production environment with the VMOps team as a required reviewer.

B. Specify the environment named Production in the workflow jobs that deploy to the VMs.

C. Navigate to the repository settings and create a Production environment with the VMOps team as a required reviewer.

D. Add the VMs to the environment.

E. Specify the VMOps team as the owner of the environment.

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:44 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312836-exam-gh-200-topic-2-question-10-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 11 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 11
Topic #: 2

[All GH-200 Questions]

Which of the following is the lowest repository permission you need to have for downloading workflow artifacts? 
Suggested Answer: E 🗳️ 

A. Triage

B. Admin

C. Maintain

D. Write

E. Read

**Answer: E**

**Timestamp: Sept. 19, 2025, 2:33 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312775-exam-gh-200-topic-2-question-11-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 12 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 12
Topic #: 2

[All GH-200 Questions]

Which statement is true regarding the ability to delete a workflow run? 
Suggested Answer: C 🗳️ 

A. Admin access is required to delete a workflow run.

B. Pending workflow runs may be deleted.

C. Completed workflow runs may be deleted.

D. Workflow runs must be older than 30 days to be deleted.

**Answer: C**

**Timestamp: Sept. 19, 2025, 2:36 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312808-exam-gh-200-topic-2-question-12-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 14 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 14
Topic #: 2

[All GH-200 Questions]

Which command can you include in your workflow file to set the output parameter for an action? 
Suggested Answer: D 🗳️ 

A. echo "action_color=purple" >> $GITHUB_ENV

B. echo "::debug::action_color=purple"

C. echo "::add-mask::$ACTI0N_C0L0R"

D. echo "action_color=purple" >> $GITHUB_OUTPUT

**Answer: D**

**Timestamp: Sept. 19, 2025, 2:37 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312817-exam-gh-200-topic-2-question-14-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 15 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 15
Topic #: 2

[All GH-200 Questions]

As a DevOps engineer, you need to execute a deployment to different environments like development and testing based on the labels added to a pull request. The deployment should use the releases branch and trigger only when there is a change in the files under ‘apps’ folder. Which code block should be used to define the deployment workflow trigger? 
Suggested Answer: C 🗳️ 

A. on:pull_request_label:branches:- 'releases'paths:- 'apps/**'

B. on:pull_request:types: [labeled]branches:- 'releases/**'paths:- 'apps'

C. on:pull_request:types: [labeled]branches:- 'releases'paths:- 'apps/**'

D. on:pull_request_review:types: [labeled]branches:- 'releases'paths:- 'apps/**'

**Answer: C**

**Timestamp: Sept. 19, 2025, 2:43 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312828-exam-gh-200-topic-2-question-15-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 16 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 16
Topic #: 2

[All GH-200 Questions]

As a DevOps engineer, you are developing workflows to build an application. You have a requirement to create the build targeting multiple node versions. Which code block should you use to define the workflow? 
Suggested Answer: A 🗳️ 

A.

B.

C.

D.

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:35 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312800-exam-gh-200-topic-2-question-16-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 17 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 17
Topic #: 2

[All GH-200 Questions]

Disabling a workflow allows you to stop a workflow from being triggered without having to delete the file from the repo. In which scenarios would temporarily disabling a workflow be most useful? (Each correct answer presents a complete solution. Choose two.) 
Suggested Answer: BD 🗳️ 

A. A runner needs to have diagnostic logging enabled.

B. A workflow error produces too many, or wrong, requests, impacting external services negatively.

C. A workflow is configured to run on self-hosted runners.

D. A workflow sends requests to a service that is down.

E. A workflow needs to be changed from running on a schedule to a manual trigger.

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:33 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312777-exam-gh-200-topic-2-question-17-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 18 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 18
Topic #: 2

[All GH-200 Questions]

Which of the following is a valid reusable workflow reference? 
Suggested Answer: B 🗳️ 

A. uses: octo-org/another-repo/workflow.yml@v1

B. uses: octo-org/another-repo/.github/workflows/workflow.yml@v1

C. uses: another-repo/.github/workflows/workflow.yml@v1

D. uses: another-repo/workflow.yml@v1

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:36 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312813-exam-gh-200-topic-2-question-18-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 21 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 21
Topic #: 2

[All GH-200 Questions]

Which syntax correctly accesses a job output (output1) of an upstream job (job1) from a dependent job within a workflow? 
Suggested Answer: A 🗳️ 

A. ${{needs.job1.outputs.output1}}

B. ${{needs.job1.output1}}

C. ${{depends.job1.output1}}

D. ${{job1.outputs.output1}}

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:36 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312811-exam-gh-200-topic-2-question-21-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 22 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 22
Topic #: 2

[All GH-200 Questions]

What is the right method to ensure users approve a workflow before the next step proceeds? 
Suggested Answer: C 🗳️ 

A. creating a branch protection rule and only allow certain users access

B. granting users workflow approval permissions

C. adding users as required reviewers for an environment

D. granting users repository approval permission

**Answer: C**

**Timestamp: Sept. 19, 2025, 2:43 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312829-exam-gh-200-topic-2-question-22-discussion/)

----------------------------------------

## Exam GH-200 topic 2 question 23 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 23
Topic #: 2

[All GH-200 Questions]

As a developer, you need to integrate a GitHub Actions workflow with a third-party code quality provider that uses the Checks API. How should you trigger a follow-up workflow? 
Suggested Answer: B 🗳️ 

A. Add the workflow_run webhook event as a trigger for the workflow for the code quality integration name

B. Add the check_run webhook event as a trigger for the workflow when the code quality integration is completed

C. Add the pull_request webhook event as a trigger for the workflow when the code quality integration is synchronized

D. Add the deployment webhook event as a trigger for the workflow when the code quality integration is completed

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:34 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312793-exam-gh-200-topic-2-question-23-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 1 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 1
Topic #: 3

[All GH-200 Questions]

What is the simplest action type to run a shell script? 
Suggested Answer: C 🗳️ 

A. Bash script action

B. Composite action

C. JavaScript action

D. Docker container action

**Answer: C**

**Timestamp: Sept. 19, 2025, 2:35 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312797-exam-gh-200-topic-3-question-1-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 2 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 2
Topic #: 3

[All GH-200 Questions]

What is the most suitable action type for a custom action written in TypeScript? 
Suggested Answer: D 🗳️ 

A. Docker container action

B. Bash script action

C. composite run step

D. JavaScript action

**Answer: D**

**Timestamp: Sept. 19, 2025, 2:44 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312833-exam-gh-200-topic-3-question-2-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 3 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 3
Topic #: 3

[All GH-200 Questions]

You are a DevOps engineer working on custom Actions development. You need to handle the errors or exceptions as part of the JavaScript based action code. What should be added to the following code block to handle errors? const core = require('@actions/core'); try {// action code} catch (error) {<< insert snippet here >>} 
Suggested Answer: C 🗳️ 

A. core.setException(error.message);

B. action.setError(error.message);

C. core.setFailed(error.message);

D. core.action.setException(error.message);

**Answer: C**

**Timestamp: Sept. 19, 2025, 2:37 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312818-exam-gh-200-topic-3-question-3-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 4 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 4
Topic #: 3

[All GH-200 Questions]

Which workflow commands send information from the runner? (Each correct answer presents a complete solution. Choose two.) 
Suggested Answer: BD 🗳️ 

A. reading from environment variables

B. setting a debug message

C. populating variables in a Dockerfile

D. setting output parameters

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:35 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312803-exam-gh-200-topic-3-question-4-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 5 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 5
Topic #: 3

[All GH-200 Questions]

Which of the following is the most common way to target a specific major release version? 
Suggested Answer: A 🗳️ 

A. steps:- uses: actions/checkout@v3

B. steps:- uses: actions/checkout

C. steps:- uses: actions/checkout@U1673995124

D. steps:- uses: actions/checkout@ac593985615ec2ede58e132d2e21d2b1cbd6127c

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:34 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312789-exam-gh-200-topic-3-question-5-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 6 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 6
Topic #: 3

[All GH-200 Questions]

You are a DevOps engineer working on a custom action. You want to conditionally run a script at the start of the action, before the main entrypoint. Which code block should be used to define the metadata file for your custom action? 
Suggested Answer: B 🗳️ 

A. runs:using: 'nodel6'pre-if: github.event_name == 'push' then 'start.js'main: 'index.js'

B. runs:using: 'nodel6'pre: 'start.js'pre-if: github.event_name == 'push'main: 'index.js'

C. runs:using: 'nodel6'start: 'start.js'start-if: github.event_name == 'push'main: 'index.js'

D. runs:using: 'nodel6'before: 'start.js'before-if: github.event_name == 'push'main: 'index.js’

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:34 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312790-exam-gh-200-topic-3-question-6-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 7 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 7
Topic #: 3

[All GH-200 Questions]

As a developer, how can you identify a JavaScript action on GitHub? 
Suggested Answer: D 🗳️ 

A. The action’s repository includes a js.yml file in the .github/workflows directory.

B. The action’s repository name includes the keyword “JavaScript.”

C. The action.yml metadata file has the runs.using value set to node16.

D. The action.yml metadata file references a package.json file.

**Answer: D**

**Timestamp: Sept. 19, 2025, 2:37 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312815-exam-gh-200-topic-3-question-7-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 8 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 8
Topic #: 3

[All GH-200 Questions]

As a developer, your Actions workflow often reuses the same outputs or downloaded dependencies from one run to another. To cache dependencies for a job, you are using the GitHub cache action. Which input parameters are required for this action? (Each correct answer presents part of the solution. Choose two.) 
Suggested Answer: AC 🗳️ 

A. path: the file path on the runner to cache or restore

B. dependency: the name and version of a package to cache or restore

C. key: the key created when saving a cache and the key used to search for a cache

D. restore-keys: the copy action key used with cache parameter to cache the data

E. cache-hit: the copy action key used with restore parameter to restore the data from the cache

F. ref: the ref name of the branch to access and restore a cache created

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:36 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312812-exam-gh-200-topic-3-question-8-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 9 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 9
Topic #: 3

[All GH-200 Questions]

As a developer, how can you identify a composite action on GitHub? 
Suggested Answer: D 🗳️ 

A. The action’s repository name includes the keyword “composite.”

B. The action’s repository includes an init.sh file in the root directory.

C. The action’s repository includes Dockerfile and package.json files.

D. The action.yml metadata file has the runs.using value set to composite.

**Answer: D**

**Timestamp: Sept. 19, 2025, 2:43 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312827-exam-gh-200-topic-3-question-9-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 10 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 10
Topic #: 3

[All GH-200 Questions]

What can be used to set a failed status of an action from its code? 
Suggested Answer: D 🗳️ 

A. JavaScript dist/ folder

B. composite run step

C. output variable

D. a non-zero exit code

E. Dockerfile CMD

F. @actions/github toolkit

**Answer: D**

**Timestamp: Sept. 19, 2025, 2:35 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312798-exam-gh-200-topic-3-question-10-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 11 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 11
Topic #: 3

[All GH-200 Questions]

As a developer, you need to use GitHub Actions to deploy a microservice that requires runtime access to a secure token. This token is used by a variety of other microservices managed by different teams in different repos. To minimize management overhead and ensure the token is secure, which mechanisms should you use to store and access the token? (Each correct answer presents a complete solution. Choose two.) 
Suggested Answer: BC 🗳️ 

A. Store the token as a GitHub encrypted secret in the same repo as the code. During deployment, use GitHub Actions to store the secret in an environment variable that can be accessed at runtime.

B. Use a corporate non-GitHub secret store (e.g., HashiCorp Vault) to store the token. During deployment, use GitHub Actions to store the secret in an environment variable that can be accessed at runtime.

C. Store the token as an organizational-level encrypted secret in GitHub. During deployment, use GitHub Actions to store the secret in an environment variable that can be accessed at runtime.

D. Store the token as a GitHub encrypted secret in the same repo as the code. Create a reusable custom GitHub Action to access the token by the microservice at runtime.

E. Store the token in a configuration file in a private repository. Use GitHub Actions to deploy the configuration file to the runtime environment.

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:43 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312831-exam-gh-200-topic-3-question-11-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 12 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 12
Topic #: 3

[All GH-200 Questions]

Which of the following statements are true regarding the use of GitHub Actions on a GitHub Enterprise Server instance? (Each correct answer presents a complete solution. Choose three.) 
Suggested Answer: BCF 🗳️ 

A. Actions created by GitHub are automatically available and cannot be disabled.

B. Third-party actions can be used on GitHub Enterprise Server by configuring GitHub Connect.

C. Most GitHub-authored actions are automatically bundled for use on GitHub Enterprise Server.

D. Use of GitHub Actions on GitHub Enterprise Server requires a persistent internet connection.

E. Actions must be defined in the .github repository.

F. Third-party actions can be manually synchronized for use on GitHub Enterprise Server.

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:37 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312814-exam-gh-200-topic-3-question-12-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 13 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 13
Topic #: 3

[All GH-200 Questions]

In the following workflow file, line 5 interprets lines 3 and 4 as Python. Which of the following is a valid option to complete line 5?1 steps:2 - run: |3 import os4 print(os.environ['PATH'])5 
Suggested Answer: A 🗳️ 

A. shell: python

B. working-directory: .github/python

C. shell: bash

D. with: python

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:34 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312786-exam-gh-200-topic-3-question-13-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 14 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 14
Topic #: 3

[All GH-200 Questions]

As a developer, you need to make sure that only actions from trusted sources are available for use in your GitHub Enterprise Cloud organization. Which of the following statements are true? (Each correct answer presents a complete solution. Choose three.) 
Suggested Answer: ABC 🗳️ 

A. Actions can be published to an internal marketplace.

B. GitHub-verified actions can be collectively enabled for use in the enterprise.

C. Specific actions can individually be enabled for the organization, including version information.

D. Actions can be restricted to only those available in the enterprise.

E. Individual third-party actions enabled with a specific tag will prevent updated versions of the action from introducing vulnerabilities.

F. Actions created by GitHub are automatically enabled and cannot be disabled.

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:33 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312778-exam-gh-200-topic-3-question-14-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 15 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 15
Topic #: 3

[All GH-200 Questions]

As a developer, you created a JavaScript action. What is the best way to test your JavaScript action? 
Suggested Answer: A 🗳️ 

A. Create a workflow that only executes your specific JavaScript action.

B. Package your JavaScript action inside a docker container image and run it.

C. Use a tool called @vercel/ncc to compile your code.

D. Create a workflow that includes the actions/debug-javascript action.

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:33 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312780-exam-gh-200-topic-3-question-15-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 16 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 16
Topic #: 3

[All GH-200 Questions]

When reviewing an action for use, what file defines its available inputs and outputs? 
Suggested Answer: E 🗳️ 

A. inputs.yml

B. defaults.json

C. workflow.yml

D. config.json

E. action.yml

**Answer: E**

**Timestamp: Sept. 19, 2025, 2:35 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312799-exam-gh-200-topic-3-question-16-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 17 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 17
Topic #: 3

[All GH-200 Questions]

Which files are required for a Docker container action in addition to the source code? (Each correct answer presents a partial solution. Choose two.) 
Suggested Answer: AD 🗳️ 

A. action.yml

B. Actionfile

C. metadata.yml

D. Dockerfile

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:35 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312794-exam-gh-200-topic-3-question-17-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 18 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 18
Topic #: 3

[All GH-200 Questions]

As a developer, you have configured an IP allow list on a GitHub organization. Which effects does the IP allow list have on GitHub Actions? (Each answer presents a complete solution. Choose two.) 
Suggested Answer: BD 🗳️ 

A. You can use standard GitHub-hosted runners since their IP addresses are automatically allowed.

B. You can use self-hosted runners with known IP addresses.

C. You must allow GitHub Actions’s IP address ranges in order to use marketplace actions.

D. You can use GitHub-hosted larger runners since they can be configured with static IP addresses.

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:36 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312806-exam-gh-200-topic-3-question-18-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 19 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 19
Topic #: 3

[All GH-200 Questions]

You have exactly one Windows x64 self-hosted runner, and it is configured with custom tools. Which syntax could you use in the workflow to target that runner? 
Suggested Answer: A 🗳️ 

A. runs-on: [self-hosted, windows, x64]

B. self-hosted: [windows-x64]

C. runs-on: windows-latest

D. self-hosted: [windows, x64]

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:33 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312779-exam-gh-200-topic-3-question-19-discussion/)

----------------------------------------

## Exam GH-200 topic 3 question 20 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 20
Topic #: 3

[All GH-200 Questions]

As a developer, which workflow steps should you perform to publish an image to the GitHub Container Registry? (Each correct answer represents part of the solution. Choose three). 
Suggested Answer: ABE 🗳️ 

A. Push the image to the GitHub Container Registry.

B. Authenticate to the GitHub Container Registry.

C. Use the actions/setup-docker action.

D. Pull the image from the GitHub Container Registry.

E. Build the container image.

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:44 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312840-exam-gh-200-topic-3-question-20-discussion/)

----------------------------------------

## Exam GH-200 topic 4 question 1 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 1
Topic #: 4

[All GH-200 Questions]

Which choices represent best practices for publishing actions so that they can be consumed reliably? (Each correct answer presents a complete solution. Choose two.) 
Suggested Answer: BD 🗳️ 

A. default branch

B. commit SHA

C. repo name

D. tag

E. organization name

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:34 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312787-exam-gh-200-topic-4-question-1-discussion/)

----------------------------------------

## Exam GH-200 topic 4 question 2 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 2
Topic #: 4

[All GH-200 Questions]

What is a valid scenario regarding environment secrets? 
Suggested Answer: A 🗳️ 

A. configuring environment secrets for connecting to GitHub Enterprise Server

B. configuring environment secrets to automatically pull from Azure Key Vault

C. ensuring a job cannot access environment secrets until approval is obtained from a required reviewer

D. ensuring only a specific step can access an environment secret

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:34 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312784-exam-gh-200-topic-4-question-2-discussion/)

----------------------------------------

## Exam GH-200 topic 4 question 3 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 3
Topic #: 4

[All GH-200 Questions]

What are two reasons to keep an action in its own repository instead of bundling it with other application code? (Each correct answer presents a complete solution. Choose two.) 
Suggested Answer: BD 🗳️ 

A. It makes the action.yml file optional.

B. It makes it easier for the GitHub community to discover the action.

C. It widens the scope of the code base for developers fixing issues and extending the action.

D. It decouples the action’s versioning from the versioning of other application code.

E. It allows sharing workflow secrets with other users.

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:33 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312781-exam-gh-200-topic-4-question-3-discussion/)

----------------------------------------

## Exam GH-200 topic 4 question 4 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 4
Topic #: 4

[All GH-200 Questions]

As a developer, you are authoring a workflow that will deploy to both DevCloud and TestCloud resources. Each cloud resource is accessed with a different deployment key. Which approach best allows you to use the same reusable workflow in separate jobs to target the different cloud resources? 
Suggested Answer: C 🗳️ 

A. Populate a DEPLOY_KEY repository secret with a JSON object containing DevCloud and TestCloud properties. Then specify DEPLOY_KEY.DevCloud in the secrets sections of the reusable workflow.

B. Use a marketplace action to conditionally parse the DEPLOY_KEY repository secret based on the cloud resource name.

C. Store the different keys in a DEPLOY_KEY environment secret in the DevCloud and TestCloud environments. Specify DEPLOY_KEY in the secrets section of the reusable workflow.

D. Create repository secrets named DevCloud.DEPLOY_KEY and TestCloud.DEPLOY_KEY so that the reusable workflow parses the secrets by resource name.

**Answer: C**

**Timestamp: Sept. 19, 2025, 2:36 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312805-exam-gh-200-topic-4-question-4-discussion/)

----------------------------------------

## Exam GH-200 topic 4 question 6 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 6
Topic #: 4

[All GH-200 Questions]

An organization’s policies specify only local actions are allowed. How should actions be distributed for this organization? 
Suggested Answer: B 🗳️ 

A. via a repository owned by a third party

B. via repositories owned by the organization

C. via the GitHub Marketplace

D. via the .github repository owned by the organization

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:44 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312835-exam-gh-200-topic-4-question-6-discussion/)

----------------------------------------

## Exam GH-200 topic 4 question 8 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 8
Topic #: 4

[All GH-200 Questions]

What are the most significant advantages of adding documentation while distributing custom actions? (Each answer presents a complete solution. Choose two.) 
Suggested Answer: BD 🗳️ 

A. It generates auto completion when using the action in a workflow.

B. It shares the description of the action to the users.

C. It provides an example of the action.

D. It creates a readme.md for the consuming workflow.

**Answer: B**

**Timestamp: Sept. 19, 2025, 2:34 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312792-exam-gh-200-topic-4-question-8-discussion/)

----------------------------------------

## Exam GH-200 topic 4 question 9 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 9
Topic #: 4

[All GH-200 Questions]

A workflow that had been working now stalls in a waiting state until failing. The workflow file process-ml.yaml has not changed and contains jobs specifying runs-on: [gpu ]. Which of the following steps would troubleshoot the issue? (Each answer presents a complete solution. Choose two.) 
Suggested Answer: AD 🗳️ 

A. Review the contents of the Runner_*.log files in the _diag folder.

B. Increase the usage limits for the GitHub-hosted runners.

C. Check the “Set up job” step for the logs of the last successful run to determine the runner.

D. Update the org settings to enable GPU-based GitHub-hosted runners.

E. Rotate the GITHUB_TOKEN secret for the appropriate runners.

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:42 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312821-exam-gh-200-topic-4-question-9-discussion/)

----------------------------------------

## Exam GH-200 topic 4 question 10 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 10
Topic #: 4

[All GH-200 Questions]

Your organization needs to simplify reusing and maintaining automation in your GitHub Enterprise Cloud. Which components can be directly reused across all repositories in an organization? (Each correct answer presents a complete solution. Choose three.) 
Suggested Answer: DEF 🗳️ 

A. actions stored in an organizational partition in the GitHub Marketplace

B. custom Docker actions stored in GitHub Container Registry

C. self-hosted runners

D. encrypted secrets

E. workflow templates

F. actions stored in private repositories in the organization

**Answer: D**

**Timestamp: Sept. 19, 2025, 2:43 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312825-exam-gh-200-topic-4-question-10-discussion/)

----------------------------------------

## Exam GH-200 topic 4 question 11 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 11
Topic #: 4

[All GH-200 Questions]

Which of the following is the best way for an enterprise to prevent certain marketplace actions from running? 
Suggested Answer: D 🗳️ 

A. Create a list of the actions that are restricted from being used as an enterprise policy. Every other action can be run.

B. It is not possible; if an action is in the marketplace, its use cannot be restricted.

C. Create a list that is maintained as a . yml file in a . github repository specified in the enterprise. Only these actions can be run.

D. Create a list of the actions that are allowed to run as an enterprise policy. Only these actions can be run.

**Answer: D**

**Timestamp: Sept. 19, 2025, 2:33 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312782-exam-gh-200-topic-4-question-11-discussion/)

----------------------------------------

## Exam GH-200 topic 4 question 12 discussion

Actual exam question from

Microsoft's
GH-200

Question #: 12
Topic #: 4

[All GH-200 Questions]

When creating and managing custom actions in an enterprise setting, which of the following is considered a best practice? 
Suggested Answer: A 🗳️ 

A. creating a separate repository for each action so that the version can be managed independently

B. creating a separate branch in application repositories that only contains the actions

C. creating a single repository for all custom actions so that the versions for each action are all the same

D. including custom actions that other teams need to reference in the same repository as application code

**Answer: A**

**Timestamp: Sept. 19, 2025, 2:34 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/microsoft/view/312783-exam-gh-200-topic-4-question-12-discussion/)

----------------------------------------


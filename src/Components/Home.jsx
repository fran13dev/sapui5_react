import React, { useState } from 'react'
import {
  Card,
  Text,
  List,
  StandardListItem,
  ValueState,
  ProgressIndicator,
  Title,
  TitleLevel,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
  AnalyticalTable,
  Icon
} from '@ui5/webcomponents-react'

import { spacing } from '@ui5/webcomponents-react-base'
import { BarChart, LineChart } from '@ui5/webcomponents-react-charts'

// web component icons
import '@ui5/webcomponents-icons/dist/icons/line-chart.js'
import '@ui5/webcomponents-icons/dist/icons/horizontal-bar-chart.js'
import '@ui5/webcomponents-icons/dist/icons/add.js'
import '@ui5/webcomponents-icons/dist/icons/list.js'
import '@ui5/webcomponents-icons/dist/icons/table-view.js'

import { useHistory } from 'react-router-dom'

export const Home = () => {
  const [toggleCharts, setToggleCharts] = useState('LineChart')
  const [loading, setLoading] = useState(false)

  const contentTitle = toggleCharts === 'LineChart' ? 'Line Chart' : 'Bar Chart'
  const switchToChart =
    toggleCharts === 'LineChart' ? 'bar chart' : 'line chart'

  const quarterAvg = [
    {
      label: 'Quarterly Average',
      data: [90, 83, 85, 82]
    }
  ]

  const quarters = ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']

  const data = new Array(10).fill(null).map((_, index) => {
    return {
      name: `name ${index + 1}`,
      age: Math.floor(Math.random() * 100),
      job: {
        title: `title ${index + 1}`,
        experience: Math.floor(Math.random() * 50)
      }
    }
  })

  const columns = [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Age',
      accessor: 'age'
    },
    {
      Header: 'Title',
      accessor: 'job.title'
    },
    {
      Header: 'Experience',
      accessor: 'job.experience'
    }
  ]

  const handleHeaderClick = () => {
    if (toggleCharts === 'LineChart') {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setToggleCharts('barChart')
      }, 2000)
    } else {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setToggleCharts('LineChart')
      }, 2000)
    }
  }

  const history = useHistory()
  const handleProgressHeaderClick = () => {
    history.push('/detail')
  }

  return (
    <FlexBox
      justifyContent={FlexBoxJustifyContent.Center}
      wrap={FlexBoxWrap.Wrap}
    >
      <Card
        avatar={
          <Icon
            name={
              toggleCharts === 'LineChart'
                ? 'line-chart'
                : 'horizontal-bar-chart'
            }
          />
        }
        heading='Quarterly Average'
        subtitle={`Click here to switch data visualization to ${switchToChart}`}
        style={{ width: 300, ...spacing.sapUiContentPadding }}
        headerInteractive
        onHeaderClick={handleHeaderClick}
      >
        <Text style={spacing.sapUiContentPadding}>{contentTitle}</Text>
        {toggleCharts === 'LineChart' ? (
          <LineChart
            labels={quarters}
            datasets={quarterAvg}
            loading={loading}
          />
        ) : (
          <BarChart labels={quarters} datasets={quarterAvg} loading={loading} />
        )}
      </Card>

      <Card
        heading='Progress'
        subtitle='List'
        style={{ width: 300, ...spacing.sapUiContentPadding }}
        avatar={<Icon name='list' />}
        headerInteractive
        onHeaderClick={handleProgressHeaderClick}
      >
        <List>
          <StandardListItem info='finished' infoState={ValueState.Success}>
            Item 1
          </StandardListItem>

          <StandardListItem info='failed' infoState={ValueState.Error}>
            Item 2
          </StandardListItem>

          <StandardListItem
            info='in progress'
            infoState={ValueState.Warning}
            style={{ height: 80 }}
          >
            <FlexBox direction={FlexBoxDirection.Column}>
              <Title level={TitleLevel.H5}>Item 3</Title>
              <ProgressIndicator
                displayValue='80%'
                percentValue={80}
                width={80}
                state={ValueState.Success}
              />
            </FlexBox>
          </StandardListItem>

          <StandardListItem
            info='in progress'
            infoState={ValueState.Warning}
            style={{ height: 80 }}
          >
            <FlexBox direction={FlexBoxDirection.Column}>
              <Title level={TitleLevel.H5}>Item 4</Title>
              <ProgressIndicator
                displayValue='5%'
                percentValue={5}
                width={180}
                state={ValueState.Error}
              />
            </FlexBox>
          </StandardListItem>
        </List>
      </Card>

      <Card
        heading='Analytical Table'
        style={{ maxWidth: 900, ...spacing.sapUiContentPadding }}
        avatar={<Icon name='table-view' />}
      >
        <AnalyticalTable data={data} columns={columns} />
      </Card>
    </FlexBox>
  )
}
